import { SignatureHelpProvider, TextDocument, Position, CancellationToken, SignatureHelp, MarkdownString, SignatureInformation, CompletionItemKind } from "vscode";

import allTypes from "./allTypes";

export class AppsyncSignatureHelpProvider implements SignatureHelpProvider {
    _methodReference: Record<string, Array<SignatureInformation>> = {};
    constructor() {
        allTypes.forEach((itemSettings) => {
            itemSettings.prefixes.forEach(prefix => {
                itemSettings.properties.filter(prop => prop.kind === CompletionItemKind.Method)
                    .forEach(prop => {
                        prop.names.forEach(name => {
                            this._methodReference[`${prefix}${name}`] = prop.signatures?.map(sig => {
                                sig.documentation = sig.documentation ?? prop.documentation;
                                sig.label = sig.label ?? `${name}()`;
                                return sig;
                            }) ?? [
                                    {
                                        label: `${name}()`,
                                        documentation: new MarkdownString(prop.documentation),
                                        parameters: []
                                    }
                                ];
                        });
                    });
            });
        });
    }

    public async provideSignatureHelp(
        document: TextDocument, position: Position, token: CancellationToken):
        Promise<SignatureHelp | undefined> {

        let linePrefix = document.lineAt(position).text.substr(0, position.character);
        let methodName = linePrefix.substring(0, linePrefix.lastIndexOf("("));
        let commaCount = linePrefix.substring(methodName.length).split(",").length - 1;

        if (token.isCancellationRequested || linePrefix.endsWith(")")) { return undefined; }


        const methodRef = Object.entries(this._methodReference).find(([key]) => methodName.endsWith(key))?.[1];

        if (!methodRef) {
            return undefined;
        }

        const result = new SignatureHelp();

        result.signatures = methodRef;

        result.activeSignature = Math.max(0, methodRef.findIndex(value => value.parameters.length > commaCount));
        result.activeParameter = commaCount;

        return result;
    }
}