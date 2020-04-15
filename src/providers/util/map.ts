import { AutocompleteData } from "../dataTypes";
import { CompletionItemKind } from "vscode";

export default [{
    prefixes: ['$util.map.'],
    properties: [
        { names: ["copyAndRetainAllKeys"], kind: CompletionItemKind.Method, documentation: "Makes a shallow copy of the first map, retaining only the keys specified in the list, if they are present. All other keys will be removed from the copy." },

        { names: ["copyAndRemoveAllKeys"], kind: CompletionItemKind.Method, documentation: "Makes a shallow copy of the first map, removing any entries where the key is specified in the list, if they are present. All other keys will be retained in the copy." },
    ]
}] as Array<AutocompleteData.CompletionItemSettings>;