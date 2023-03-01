/* eslint-disable unused-imports/no-unused-vars-ts */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */

export interface Query<TResult> {}

export interface AdminQuery<TResult> extends Query<AdminQueryResult<TResult>> {
    Page: number;
    PageSize: number;

    SortOrder?: SortOrderDTO | null;
    SortBy?: string | null;
}

export interface AdminQueryResult<TResult> {
    Total: number;
    Items: TResult;
}

export enum SortOrderDTO {
    Descending = 0,
    Ascending = 1,
}
