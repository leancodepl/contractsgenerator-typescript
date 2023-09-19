/* eslint-disable @typescript-eslint/no-explicit-any, import/no-extraneous-dependencies */
import { QueryFunctionContext, QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { catchError, firstValueFrom, MonoTypeOperatorFunction, throwError, fromEvent, race, Observable } from "rxjs";
import { ajax, AjaxConfig } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";

function authGuard<T>(authProvider?: AuthProvider): MonoTypeOperatorFunction<T> {
    if (!authProvider) {
        return response => response;
    }

    return response =>
        response.pipe(
            catchError(error => {
                if (error.status === 401) {
                    authProvider.invalidateSession?.();
                }

                return throwError(() => error);
            }),
        );
}

export type AuthProvider = {
    invalidateSession?: () => void;
};

export type CqrsClientConfig = {
    cqrsEndpoint: string;
    authProvider?: AuthProvider;
    ajaxOptions?: Omit<AjaxConfig, "headers" | "url" | "method" | "responseType" | "body" | "withCredentials">;
};

export default function mkCqrsClient({ cqrsEndpoint, authProvider, ajaxOptions }: CqrsClientConfig) {
    function fetcher<TData>(endpoint: string, config: Partial<AjaxConfig> = {}) {
        const apiCall = <TResult>(data: TData) =>
            ajax<TResult>({
                ...ajaxOptions,
                ...config,
                headers: {
                    "Content-Type": "application/json",
                },
                url: `${cqrsEndpoint}/${endpoint}`,
                method: "POST",
                body: data,
                withCredentials: true,
            });

        return <TResult>(data: TData) => {
            const $apiCall = apiCall<TResult>(data).pipe(authGuard(authProvider));

            return $apiCall.pipe(map(result => result.response));
        };
    }

    return {
        createQuery<TQuery, TResult>(type: string) {
            const fetch = fetcher<TQuery>(`query/${type}`, { responseType: "json" });

            function useApiQuery(
                data: TQuery,
                options?: Omit<UseQueryOptions<TResult, unknown>, "queryKey" | "queryFn" | "initialData">,
            ) {
                return useQuery<TResult, unknown>(
                    useApiQuery.key(data),
                    context => firstValueFrom(useApiQuery.fetch(data, context)),
                    options,
                );
            }

            useApiQuery.fetch = (data: TQuery, context?: QueryFunctionContext<QueryKey>): Observable<TResult> =>
                race([
                    fetch<TResult>(data),
                    ...(context?.signal
                        ? [
                              fromEvent<AbortSignalEventMap["abort"]>(context.signal, "abort").pipe(
                                  mergeMap(() => throwError(() => new Error("Query aborted"))),
                              ),
                          ]
                        : []),
                ]);

            useApiQuery.key = (query: Partial<TQuery>) => [type, query];

            return useApiQuery;
        },
        createOperation() {
            return undefined;
        },
        createCommand() {
            return undefined;
        },
    };
}
