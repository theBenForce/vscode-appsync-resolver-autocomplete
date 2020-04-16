import { AutocompleteData } from '../dataTypes';
import { CompletionItemKind } from 'vscode';

/**
 * Methods defined by the Java [Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html) class
 */
export default [
    {
        names: ["clear"], kind: CompletionItemKind.Method, documentation: "Removes all of the mappings from this map (optional operation)."
    },
    {
        names: ["containsKey"], kind: CompletionItemKind.Method, documentation: "Returns true if this map contains a mapping for the specified key.",
        signatures: [
            {
                label: 'boolean containsKey(Object key)',
                parameters: [
                    { label: 'key', documentation: 'key whose presence in this map is to be tested' }
                ]
            }
        ]
    },
    { names: ["containsValue"], kind: CompletionItemKind.Method, documentation: "Returns true if this map maps one or more keys to the specified value." },
    { names: ["entrySet"], kind: CompletionItemKind.Method, documentation: "Returns a Set view of the mappings contained in this map." },
    { names: ["get"], kind: CompletionItemKind.Method, documentation: "Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key." },
    { names: ["getOrDefault"], kind: CompletionItemKind.Method, documentation: "Returns the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key." },
    { names: ["isEmpty"], kind: CompletionItemKind.Method, documentation: "Returns true if this map contains no key-value mappings." },
    { names: ["keySet"], kind: CompletionItemKind.Method, documentation: "Returns a Set view of the keys contained in this map." },
    { names: ["merge"], kind: CompletionItemKind.Method, documentation: "If the specified key is not already associated with a value or is associated with null, associates it with the given non-null value." },
    { names: ["put"], kind: CompletionItemKind.Method, documentation: "Associates the specified value with the specified key in this map (optional operation)." },
    { names: ["putAll"], kind: CompletionItemKind.Method, documentation: "Copies all of the mappings from the specified map to this map (optional operation)." },
    { names: ["putIfAbsent"], kind: CompletionItemKind.Method, documentation: "If the specified key is not already associated with a value (or is mapped to null) associates it with the given value and returns null, else returns the current value." },
    { names: ["replace"], kind: CompletionItemKind.Method, documentation: "Replaces the entry for the specified key only if it is currently mapped to some value." },
    { names: ["replaceAll"], kind: CompletionItemKind.Method, documentation: "Replaces each entry's value with the result of invoking the given function on that entry until all entries have been processed or the function throws an exception." },
    { names: ["size"], kind: CompletionItemKind.Method, documentation: "Returns the number of key-value mappings in this map." },
    { names: ["values"], kind: CompletionItemKind.Method, documentation: "Returns a Collection view of the values contained in this map." },
] as Array<AutocompleteData.Item>;