import { admin } from "./admin";

describe("admin", () => {
    it("should work", () => {
        expect(admin()).toEqual("admin");
    });
});
