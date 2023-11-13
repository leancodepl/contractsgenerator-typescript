import { ensureNotEmpty } from "@leancodepl/utils";
import { leancode } from "./protocol";
import { createValue } from "./values";

export class SchemaConstant {
    name;
    comment;
    value;

    constructor(constant: leancode.contracts.IConstantRef) {
        this.name = ensureNotEmpty(constant.name);
        this.value = createValue(ensureNotEmpty(constant.value));
        this.comment = constant.comment ?? undefined;
    }
}
