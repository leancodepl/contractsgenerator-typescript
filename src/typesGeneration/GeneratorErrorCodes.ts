import _ from "lodash";
import ts from "typescript";
import { leancode } from "../protocol";
import { ensureNotEmpty } from "../utils/notEmpty";

export default class GeneratorErrorCodes {
    errorCodes;

    get hasErrors() {
        return this.errorCodes.length > 0;
    }

    constructor({ errorCodes }: { errorCodes: leancode.contracts.IErrorCode[] }) {
        this.errorCodes = GeneratorErrorCodes.convertErrorCodes(errorCodes);
    }

    generateErrorCodes() {
        if (!this.hasErrors) {
            return undefined;
        }

        return [
            ts.factory.createVariableStatement(
                /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
                /* declarationList */ ts.factory.createVariableDeclarationList(
                    /* declarations */ [
                        ts.factory.createVariableDeclaration(
                            /* name */ "ErrorCodes",
                            /* exclamationToken */ undefined,
                            /* type */ undefined,
                            /* intializer */ ts.factory.createAsExpression(
                                /* expression */ ts.factory.createObjectLiteralExpression(
                                    /* properties */ this.errorCodes.map(errorCode =>
                                        ts.factory.createPropertyAssignment(
                                            /* name */ errorCode.name,
                                            /* initializer */ ts.factory.createNumericLiteral(errorCode.code),
                                        ),
                                    ),
                                    /* multiline */ true,
                                ),
                                /* type */ ts.factory.createTypeReferenceNode("const"),
                            ),
                        ),
                    ],
                    /* flags */ ts.NodeFlags.Const,
                ),
            ),
            ts.factory.createTypeAliasDeclaration(
                /* modifiers */ [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
                /* name */ "ErrorCodes",
                /* typeParameters */ undefined,
                /* type */ ts.factory.createTypeQueryNode(/* exprName */ ts.factory.createIdentifier("ErrorCodes")),
            ),
        ];
    }

    /**
     * This function prepares error codes in a structured way. Error codes are received in a list where each item can be
     * an error code or a group of codes where in each group can again contain nested groups.
     * Given that there's possibility that error codes name conflict with each other. Purpose of the code below is to
     * resolve potential conflicts. First it will flatten the list of error codes. Then it will iteratively try to fix
     * this list by:
     *  - finding conflicts by name,
     *  - for each conflicted name it tries to fix each conflicting name by prefixing it with most recent of its groups
     *    updateing the original list of error codes. At this point it might happen that we ran out of groups - in this
     *    case it means that there's not solution and an error is thrown.
     */
    private static convertErrorCodes(errorCodes: leancode.contracts.IErrorCode[]): { name: string; code: number }[] {
        type CodeWithGroups = { name: string; groups: string[]; code: number };

        const flatten = (errorCodes: leancode.contracts.IErrorCode[], groups: string[] = []): CodeWithGroups[] =>
            errorCodes.flatMap(code =>
                code.single
                    ? [
                          {
                              name: ensureNotEmpty(code.single.name),
                              groups,
                              code: ensureNotEmpty(code.single.code),
                          },
                      ]
                    : flatten(ensureNotEmpty(code.group?.innerCodes), [
                          ensureNotEmpty(code.group?.name || code.group?.groupId),
                          ...groups,
                      ]),
            );

        let codes = flatten(errorCodes);

        const fix = (codes: CodeWithGroups[]): CodeWithGroups[] => {
            if (codes.filter(code => code.groups.length === 0).length > 1) {
                throw new Error("Error codes not fixable");
            }

            return codes.map(({ code, groups: [group, ...groups], name }) => ({
                code,
                groups,
                name: group ? `${group}_${name}` : name,
            }));
        };

        const resolveConflicts = () => {
            let hasConflicts = false;

            codes = _(codes)
                .groupBy(code => code.name)
                .flatMap(codes => {
                    if (codes.length > 1) {
                        hasConflicts = true;

                        return fix(codes);
                    }

                    return codes;
                })
                .value();

            return hasConflicts;
        };

        // eslint-disable-next-line no-empty
        while (resolveConflicts()) {}

        return codes.sort(({ code: a }, { code: b }) => a - b);
    }
}
