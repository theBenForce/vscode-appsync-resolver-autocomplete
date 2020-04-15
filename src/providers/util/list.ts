import { AutocompleteData } from "../dataTypes";
import { CompletionItemKind } from "vscode";

export default [{
    prefixes: ['$util.list.'],
    properties: [
        { names: ["copyAndRetainAll"], kind: CompletionItemKind.Method, documentation: "Makes a shallow copy of the supplied list in the first argument, retaining only the items specified in the second argument, if they are present. All other items will be removed from the copy." },

        { names: ["copyAndRemoveAll"], kind: CompletionItemKind.Method, documentation: "Makes a shallow copy of the supplied list in the first argument, removing any items where the item is specified in the second argument, if they are present. All other items will be retained in the copy." },
    ]
}] as Array<AutocompleteData.CompletionItemSettings>;