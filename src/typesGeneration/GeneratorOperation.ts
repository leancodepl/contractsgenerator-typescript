import ts from "typescript";
import { leancode } from "../protocol";
import { ensureNotEmpty } from "../utils/notEmpty";
import GeneratorContext from "./GeneratorContext";
import GeneratorInterface from "./GeneratorInterface";
import GeneratorTypesDictionary from "./GeneratorTypesDictionary";
import GeneratorTypeFactory from "./types/GeneratorTypeFactory";

export default class GeneratorOperation extends GeneratorInterface {
    returnType;
    operationType;

    constructor({
        statement,
        typesDictionary,
        nameTransform,
    }: {
        statement: leancode.contracts.IStatement;
        typesDictionary: GeneratorTypesDictionary;
        nameTransform?: (name: string) => string;
    }) {
        super({ statement, typesDictionary, nameTransform });

        const returnType = GeneratorTypeFactory.createType({
            type: ensureNotEmpty(statement.operation?.returnType),
            typesDictionary,
        });

        const operationType = GeneratorTypeFactory.createType({
            type: {
                internal: {
                    name: this.id,
                },
            },
            typesDictionary,
        });

        this.returnType = returnType;
        this.operationType = operationType;
    }

    generateClient(context: GeneratorContext): ts.PropertyAssignment[] {
        if (!(context.include?.(this.id, this) ?? true) || (context.exclude?.(this.id, this) ?? false)) {
            return [];
        }

        return [
            ts.factory.createPropertyAssignment(
                /* name */ this.name,
                ts.factory.createCallExpression(
                    /* expression */ ts.factory.createPropertyAccessExpression(
                        /* expression */ ts.factory.createIdentifier("cqrsClient"),
                        /* name */ "createOperation",
                    ),
                    /* typeArguments */ [
                        this.operationType.generateType(context),
                        this.returnType.generateTypeWithNullability(context),
                    ],
                    /* argumentsArray */ [ts.factory.createStringLiteral(this.id)],
                ),
            ),
        ];
    }
}
