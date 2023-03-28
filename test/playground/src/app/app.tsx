import { Api } from "../admin";

export function App() {
    return (
        <>
            <h1>
                <span> Hello there, </span>
                Welcome test-playground 👋
            </h1>

            <Api.MyWalletsApiTable
                AmountSmallestUnitRender={value => (value as number) / 100}
                requestParams={{ UserId: "userId" }}
            />
        </>
    );
}
