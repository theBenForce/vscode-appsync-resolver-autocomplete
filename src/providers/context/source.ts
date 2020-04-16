import { AutocompleteData } from "../dataTypes";
import map from "../standard/map";

export default [{
    prefixes: ['$ctx.source.', '$context.source.'],
    properties: [
        ...map
    ]
}] as Array<AutocompleteData.CompletionItemSettings>;