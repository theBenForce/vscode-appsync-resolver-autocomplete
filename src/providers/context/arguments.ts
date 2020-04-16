import { AutocompleteData } from "../dataTypes";
import map from "../standard/map";

export default [{
    prefixes: ['$ctx.args.', '$context.args.', '$ctx.arguments.', '$context.arguments.'],
    properties: [
        ...map
    ]
}] as Array<AutocompleteData.CompletionItemSettings>;