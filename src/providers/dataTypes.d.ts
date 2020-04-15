import { CompletionItemKind } from "vscode";

declare module AutocompleteData {
    export interface Item {
        names: Array<string>;
        documentation: string;
        kind?: CompletionItemKind;
    }

    export interface CompletionItemSettings {
        prefixes: Array<string>;
        properties: Array<Item>;
    }
}