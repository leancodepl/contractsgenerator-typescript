/* eslint-disable unused-imports/no-unused-vars-ts */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */

export interface Query<TResult> {}

export interface AdminQuery<TResult> extends Query<AdminQueryResult<TResult>> {
  page: number;
  pageSize: number;

  sortDescending?: boolean | null;
  sortBy?: string | null;
}

export interface AdminQueryResult<TResult> {
  total: number;
  items: TResult;
}
