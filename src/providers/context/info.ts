import { AutocompleteData } from "../dataTypes";
import { CompletionItemKind } from "vscode";

export default [{
    prefixes: ['$ctx.info.', '$context.info.'],
    properties: [
        { names: ['fieldName'], kind: CompletionItemKind.Property, documentation: "The name of the field that is currently being resolved." },
        { names: ['parentTypeName'], kind: CompletionItemKind.Property, documentation: "The name of the parent type for the field that is currently being resolved." },
        { names: ['variables'], kind: CompletionItemKind.Property, documentation: "A map which holds all variables that are passed into the GraphQL request." },
        { names: ['selectionSetList'], kind: CompletionItemKind.Property, documentation: "A list representation of the fields in the GraphQL selection set. Fields that are aliased will only be referenced by the alias name, not the field name. The following example shows this in detail." },
        { names: ['selectionSetGraphQL'], kind: CompletionItemKind.Property, documentation: "A string representation of the selection set, formatted as GraphQL schema definition language (SDL). Although fragments aren’t be merged into the selection set, inline fragments are preserved." },
    ]
}] as Array<AutocompleteData.CompletionItemSettings>;