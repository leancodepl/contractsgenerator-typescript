import { leancode } from "./protocol";
import { ensureNotEmpty}from "@leancodepl/contractsgenerator-typescript-utils"

export class SchemaAttribute {
    name;

    constructor({ attribute }: { attribute: leancode.contracts.IAttributeRef }) {
        const name = ensureNotEmpty(attribute.attributeName);
        this.name = name;
    }
}
