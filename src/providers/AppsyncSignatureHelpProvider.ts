import { SignatureHelpProvider, TextDocument, Position, CancellationToken, SignatureHelp, MarkdownString } from "vscode";

export class AppsyncSignatureHelpProvider implements SignatureHelpProvider {
    public async provideSignatureHelp(
        document: TextDocument, position: Position, token: CancellationToken):
        Promise<SignatureHelp | undefined> {

        let linePrefix = document.lineAt(position).text.substr(0, position.character);

        if (token.isCancellationRequested || linePrefix.endsWith(")")) { return undefined; }

        const result = new SignatureHelp();

        result.signatures = [
            {
                label: "someMethod(firstParam)",
                documentation: linePrefix,
                parameters: [
                    {
                        label: "firstParam",
                        documentation: new MarkdownString("Something")
                    }
                ]
            }
        ];

        result.activeSignature = 0;
        result.activeParameter = 0;

        return result;
    }
}