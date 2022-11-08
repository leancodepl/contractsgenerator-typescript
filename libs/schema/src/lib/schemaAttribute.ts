import { ensureNotEmpty } from "@leancodepl/contractsgenerator-typescript-utils";
import { leancode } from "./protocol";

export class SchemaAttribute {
    name;

    constructor({ attribute }: { attribute: leancode.contracts.IAttributeRef }) {
        this.name = ensureNotEmpty(attribute.attributeName);
    }
}
