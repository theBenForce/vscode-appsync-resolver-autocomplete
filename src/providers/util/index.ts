
import { AutocompleteData } from '../dataTypes';
import { CompletionItemKind, MarkdownString } from "vscode";
import time from "./time";
import list from "./list";
import map from "./map";
import dynamodb from "./dynamodb";

export default [{
    prefixes: ['$util.'],
    properties: [
        { names: ["qr", "quiet"], kind: CompletionItemKind.Method, documentation: "Executes a VTL statement while suppressing the returned value of the execution. This is useful if you wish to run methods without using temporary placeholders such as adding items to a map, etc." },
        { names: ["escapeJavaScript"], kind: CompletionItemKind.Method, documentation: "Returns the input string as a JavasScript escaped string." },
        { names: ["urlEncode"], kind: CompletionItemKind.Method, documentation: "Returns the input string as an `application/x-www-form-urlencoded` encoded string." },
        { names: ["urlDecode"], kind: CompletionItemKind.Method, documentation: "Decodes an `application/x-www-form-urlencoded` encoded string back to its non-encoded form." },
        { names: ["base64Encode"], kind: CompletionItemKind.Method, documentation: "Encodes the input into a base64-encoded string." },
        { names: ["base64Decode"], kind: CompletionItemKind.Method, documentation: "Decodes the data from a base64-encoded string." },
        { names: ["parseJson"], kind: CompletionItemKind.Method, documentation: 'Takes “stringified” JSON and returns an object representation of the result.' },
        { names: ["toJson"], kind: CompletionItemKind.Method, documentation: 'Takes an object and returns a “stringified” JSON representation of that object.' },
        { names: ["autoId"], kind: CompletionItemKind.Method, documentation: 'Returns a 128-bit randomly generated UUID.' },
        { names: ["unauthorized"], kind: CompletionItemKind.Method, documentation: 'Throws Unauthorized for the field being resolved. This can be used in request or response mapping templates to decide if the caller should be allowed to resolve the field.' },
        {
            names: ["error"], kind: CompletionItemKind.Method, documentation: 'Throws a custom error. This can be used in request or response mapping templates if the template detects an error with the request or with the invocation result.',
            signatures: [
                {
                    label: "error(String error)",
                    documentation: "Throws a custom error. This can be used in request or response mapping templates if the template detects an error with the request or with the invocation result.",
                    parameters: [
                        {
                            label: "String error"
                        }
                    ]
                },
                {
                    label: "error(String error, String errorType)",
                    documentation: new MarkdownString("Throws a custom error. This can be used in request or response mapping templates if the template detects an error with the request or with the invocation result. Additionally, an `errorType` can be specified."),
                    parameters: [
                        {
                            label: "String error"
                        },
                        {
                            label: "String errorType"
                        }
                    ]
                },
                {
                    label: "error(String error, String errorType, Object data)",
                    documentation: new MarkdownString("Throws a custom error. This can be used in request or response mapping templates if the template detects an error with the request or with the invocation result. Additionally, an `errorType` and a `data` field can be specified. The `data` value will be added to the corresponding error block inside `errors` in the GraphQL response. **Note**: `data` will be filtered based on the query selection set."),
                    parameters: [
                        {
                            label: "String error"
                        },
                        {
                            label: "String errorType"
                        },
                        {
                            label: "Object data"
                        }
                    ]
                },
                {
                    label: "error(String error, String errorType, Object data, Object errorInfo)",
                    documentation: new MarkdownString("Throws a custom error. This can be used in request or response mapping templates if the template detects an error with the request or with the invocation result. Additionally, an `errorType` field, a `data` field, and a `errorInfo` field can be specified. The data value will be added to the corresponding error block inside errors in the GraphQL response. **Note**: `data` will be filtered based on the query selection set. The `errorInfo` value will be added to the corresponding `error` block inside `errors` in the GraphQL response. **Note**: `errorInfo` will NOT be filtered based on the query selection set."),
                    parameters: [
                        {
                            label: "String error"
                        },
                        {
                            label: "String errorType"
                        },
                        {
                            label: "Object data"
                        },
                        {
                            label: "Object errorInfo"
                        }
                    ]
                }
            ]

        },
        { names: ["appendError"], kind: CompletionItemKind.Method, documentation: 'Appends a custom error. This can be used in request or response mapping templates if the template detects an error with the request or with the invocation result. Unlike `$util.error(String)`, the template evaluation will not be interrupted, so that data can be returned to the caller.' },
        { names: ["validate"], kind: CompletionItemKind.Method, documentation: 'If the condition is false, throw a CustomTemplateException with the specified message.' },
        { names: ["isNull"], kind: CompletionItemKind.Method, documentation: 'Returns true if the supplied object is null.' },
        { names: ["isNullOrEmpty"], kind: CompletionItemKind.Method, documentation: 'Returns true if the supplied data is null or an empty string. Otherwise, returns false.' },
        { names: ["isNullOrBlank"], kind: CompletionItemKind.Method, documentation: 'Returns true if the supplied data is null or a blank string. Otherwise, returns false.' },
        { names: ["defaultIfNull"], kind: CompletionItemKind.Method, documentation: 'Returns the first Object if it is not null. Otherwise, returns second object as a “default Object”.' },
        { names: ["defaultIfNullOrEmpty"], kind: CompletionItemKind.Method, documentation: 'Returns the first String if it is not null or empty. Otherwise, returns second String as a “default String”.' },
        { names: ["defaultIfNullOrBlank"], kind: CompletionItemKind.Method, documentation: 'Returns the first String if it is not null or blank. Otherwise, returns second String as a “default String”.' },
        { names: ["isString"], kind: CompletionItemKind.Method, documentation: 'Returns true if Object is a String.' },
        { names: ["isNumber"], kind: CompletionItemKind.Method, documentation: 'Returns true if Object is a Number.' },
        { names: ["isBoolean"], kind: CompletionItemKind.Method, documentation: 'Returns true if Object is a Boolean.' },
        { names: ["isList"], kind: CompletionItemKind.Method, documentation: 'Returns true if Object is a List.' },
        { names: ["isMap"], kind: CompletionItemKind.Method, documentation: 'Returns true if Object is a Map.' },
        { names: ["typeOf"], kind: CompletionItemKind.Method, documentation: 'Returns a String describing the type of the Object. Supported type identifications are: “Null”, “Number”, “String”, “Map”, “List”, “Boolean”. If a type cannot be identified, the return type is “Object”.' },
        { names: ["matches"], kind: CompletionItemKind.Method, documentation: 'Returns true if the specified pattern in the first argument matches the supplied data in the second argument. The pattern must be a regular expression such as `$util.matches("a*b", "aaaaab")`. The functionality is based on [Pattern](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html), which you can reference for further documentation.' },

        { names: ["time"], documentation: 'The [`$util.time`](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-util-reference.html#time-helpers-in-util-time) variable contains datetime methods to help generate timestamps, convert between datetime formats, and parse datetime strings. The syntax for datetime formats is based on [DateTimeFormatter](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html) which you can reference for further documentation.' },

        { names: ["list"], documentation: "[`$util.list`](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-util-reference.html#list-helpers-in-util-list) contains methods to help with common List operations, such as removing or retaining items from a list for filtering use cases." },

        { names: ["map"], documentation: "[`$util.map`](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-util-reference.html#map-helpers-in-util-map) contains methods to help with common Map operations, such as removing or retaining items from a Map for filtering use cases." },

        { names: ["dynamodb"], documentation: "[`$util.dynamodb`](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-util-reference.html#dynamodb-helpers-in-util-dynamodb) contains helper methods that make it easier to write and read data to Amazon DynamoDB, such as automatic type mapping and formatting. These methods are designed to make mapping primitive types and Lists to the proper DynamoDB input format automatically, which is a Map of the format `{ \"TYPE\" : VALUE }`." },
    ]
},
...time,
...list,
...map,
...dynamodb
] as Array<AutocompleteData.CompletionItemSettings>;