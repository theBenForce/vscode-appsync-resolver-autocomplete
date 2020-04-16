import * as vscode from "vscode";
import allTypes from "./allTypes";
import { AutocompleteData } from "./dataTypes";
import { AppsyncSignatureHelpProvider } from "./AppsyncSignatureHelpProvider";

const ROOT_PROPERTIES = [
    { names: ['context', 'ctx'], documentation: "The [`$context`](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-context-reference.html#accessing-the-context) variable is a map that holds all of the contextual information for your resolver invocation." },
    { names: ['util'], documentation: 'The [`$util`](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-util-reference.html#utility-helpers-in-util) variable contains general utility methods that make it easier to work with data.' }
] as Array<AutocompleteData.Item>;

const register = (item: AutocompleteData.CompletionItemSettings) => vscode.languages.registerCompletionItemProvider(
    'velocity',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            let linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (item.prefixes.find(x => linePrefix.endsWith(x))) {
                return item.properties.map(property => property.names.map(label => {

                    const result = new vscode.CompletionItem(label, property.kind ?? vscode.CompletionItemKind.Module);
                    result.documentation = new vscode.MarkdownString(property.documentation);
                    if (property.kind === vscode.CompletionItemKind.Method) {
                        result.commitCharacters = ['('];
                        // result.insertText = `${label}()`;
                    } else {
                        result.commitCharacters = ['.'];
                    }
                    return result;
                })
                ).reduce((result, next) => result.concat(next), []);
            }



            return undefined;
        }
    },
    '.' // triggered whenever a '.' is being typed
);

export default (ctx: vscode.ExtensionContext) => {

    ctx.subscriptions.push(
        vscode.languages.registerSignatureHelpProvider(
            'velocity', new AppsyncSignatureHelpProvider(), '(', ','));

    vscode.languages.registerCompletionItemProvider(
        'velocity',
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                let linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (!linePrefix.endsWith('$')) {
                    return undefined;
                }

                return ROOT_PROPERTIES.map(property => {
                    const results = property.names.map(label => {
                        const result = new vscode.CompletionItem(label, property.kind ?? vscode.CompletionItemKind.Module);
                        result.documentation = new vscode.MarkdownString(property.documentation);
                        return result;
                    });
                    return results;
                }).reduce((result, next) => result.concat(next), []);
            }
        },
        '$' // triggered whenever a '$' is being typed
    );

    allTypes.forEach(register);
};