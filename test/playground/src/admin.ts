import { createApiComponents } from "@leancodepl/admin";
import apiSchema from "./kontomierz/apiComponents";
import KontomierzClient from "./kontomierz/cqrs";

type KontomierzClient = ReturnType<typeof KontomierzClient>;

export const Api = createApiComponents<typeof apiSchema, KontomierzClient>(apiSchema, {
    cqrs: KontomierzClient,
    cqrsClientConfig: {
        cqrsEndpoint: "https://api.local.lncd.pl/api/cqrs",
    },
});
