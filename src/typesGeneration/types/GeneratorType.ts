import ts from "typescript";
import GeneratorContext from "../GeneratorContext";

export default abstract class GeneratorType {
    abstract isNullable: boolean;
    abstract isAttribute: boolean;

    abstract generateType(context: GeneratorContext): ts.TypeNode;

    generateTypeWithNullability(context: GeneratorContext, params?: { omitUndefined?: boolean }) {
        const generatedType = this.generateType(context);

        if (this.isNullable) {
            return ts.factory.createUnionTypeNode([
                ...[generatedType, ts.factory.createLiteralTypeNode(ts.factory.createNull())],
                ...(params?.omitUndefined ? [] : [ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword)]),
            ]);
        }

        return generatedType;
    }
}
