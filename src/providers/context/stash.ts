import { AutocompleteData } from "../dataTypes";
import map from "../standard/map";

export default [{
    prefixes: ['$ctx.stash.', '$context.stash.'],
    properties: [
        ...map
    ]
}] as Array<AutocompleteData.CompletionItemSettings>;