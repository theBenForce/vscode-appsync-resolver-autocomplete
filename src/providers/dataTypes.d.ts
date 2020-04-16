import { CompletionItemKind, SignatureInformation } from "vscode";

declare module AutocompleteData {
    export interface Item {
        names: Array<string>;
        documentation: string;
        kind?: CompletionItemKind;
        signatures?: Array<SignatureInformation>;
    }

    export interface CompletionItemSettings {
        prefixes: Array<string>;
        properties: Array<Item>;
    }
}