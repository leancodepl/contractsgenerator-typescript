export type CqrsImplStub = {
    createQuery: <TQuery, TResult>(name: string) => TQuery;
    createCommand: <TCommand, TErrorCodes>(name: string, errorCodes: TErrorCodes) => void;
    createOperation: <TOperation, TResult>(name: string) => void;
};
