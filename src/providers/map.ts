import { AutocompleteData } from './dataTypes';
import { CompletionItemKind } from 'vscode';

export default [
    { names: ["put"], kind: CompletionItemKind.Method, documentation: "Set a value on this map" }
] as Array<AutocompleteData.Item>;