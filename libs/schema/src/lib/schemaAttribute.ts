import { ensureNotEmpty } from "@leancodepl/utils";
import { leancode } from "./protocol";
import { createValue } from "./values";

export class SchemaAttribute {
  name;
  positionalArguments;
  namedArguments;

  constructor({ attribute }: { attribute: leancode.contracts.IAttributeRef }) {
    this.name = ensureNotEmpty(attribute.attributeName);
    this.positionalArguments =
      attribute.argument
        ?.map(
          argument =>
            argument.positional &&
            new SchemaAttributePositionalArgument({ attributePositionalArgument: argument.positional }),
        )
        .filter((argument): argument is SchemaAttributePositionalArgument => !!argument) ?? [];
    this.namedArguments =
      attribute.argument
        ?.map(
          argument => argument.named && new SchemaAttributeNamedArgument({ attributeNamedArgument: argument.named }),
        )
        .filter((argument): argument is SchemaAttributeNamedArgument => !!argument) ?? [];
  }

  getArgument(position: number, name: string) {
    return (
      this.positionalArguments.find(argument => argument.position === position) ??
      this.namedArguments.find(argument => argument.name === name)
    );
  }
}

export class SchemaAttributeArgument {
  value;

  constructor({
    attributeArgument,
  }: {
    attributeArgument: leancode.contracts.AttributeArgument.INamed | leancode.contracts.AttributeArgument.IPositional;
  }) {
    this.value = createValue(ensureNotEmpty(attributeArgument.value));
  }
}

export class SchemaAttributePositionalArgument extends SchemaAttributeArgument {
  position;

  constructor({
    attributePositionalArgument,
  }: {
    attributePositionalArgument: leancode.contracts.AttributeArgument.IPositional;
  }) {
    super({ attributeArgument: attributePositionalArgument });
    this.position = ensureNotEmpty(attributePositionalArgument.position);
  }
}

export class SchemaAttributeNamedArgument extends SchemaAttributeArgument {
  name;

  constructor({ attributeNamedArgument }: { attributeNamedArgument: leancode.contracts.AttributeArgument.INamed }) {
    super({ attributeArgument: attributeNamedArgument });

    this.name = ensureNotEmpty(attributeNamedArgument.name);
  }
}
