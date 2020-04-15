import { AutocompleteData } from "../dataTypes";
import { CompletionItemKind } from "vscode";

export default [{
    prefixes: ['$util.dynamodb.'],
    properties: [
        { names: ["toDynamoDB"], kind: CompletionItemKind.Method, documentation: "General object conversion tool for DynamoDB that converts input objects to the appropriate DynamoDB representation. It’s opinionated about how it represents some types: e.g., it will use lists (“L”) rather than sets (“SS”, “NS”, “BS”). This returns an object that describes the DynamoDB attribute value." },

        { names: ["toDynamoDBJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toDynamoDB(Object) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toString"], kind: CompletionItemKind.Method, documentation: "Convert an input string to the DynamoDB string format. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toStringJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toString(String) : String, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toStringSet"], kind: CompletionItemKind.Method, documentation: "Converts a lists with Strings to the DynamoDB string set format. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toStringSetJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toStringSet(List<String>) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toNumber"], kind: CompletionItemKind.Method, documentation: "Converts a number to the DynamoDB number format. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toNumberJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toNumber(Number) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toNumberSet"], kind: CompletionItemKind.Method, documentation: "Converts a list of numbers to the DynamoDB number set format. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toNumberSetJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toNumberSet(List<Number>) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toBinary"], kind: CompletionItemKind.Method, documentation: "Converts binary data encoded as a base64 string to DynamoDB binary format. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toBinaryJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toBinary(String) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toBinarySet"], kind: CompletionItemKind.Method, documentation: "Converts a list of binary data encoded as base64 strings to DynamoDB binary set format. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toBinarySetJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toBinarySet(List<String>) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toBoolean"], kind: CompletionItemKind.Method, documentation: "Converts a boolean to the appropriate DynamoDB boolean format. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toBooleanJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toBoolean(boolean) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toNull"], kind: CompletionItemKind.Method, documentation: "Returns a null in DynamoDB null format. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toNullJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toNull() : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toList"], kind: CompletionItemKind.Method, documentation: "Converts a list of object to DynamoDB list format. Each item in the list is also converted to its appropriate DynamoDB format. It’s opinionated about how it represents some of the nested objects: e.g., it will use lists (“L”) rather than sets (“SS”, “NS”, “BS”). This returns an object that describes the DynamoDB attribute value." },

        { names: ["toListJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toList(List) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toMap"], kind: CompletionItemKind.Method, documentation: "Converts a map to DynamoDB map format. Each value in the map is also converted to its appropriate DynamoDB format. It’s opinionated about how it represents some of the nested objects: e.g., it will use lists (“L”) rather than sets (“SS”, “NS”, “BS”). This returns an object that describes the DynamoDB attribute value." },

        { names: ["toMapJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toMap(Map) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toMapValues"], kind: CompletionItemKind.Method, documentation: "Creates a copy of the map where each value has been converted to its appropriate DynamoDB format. It’s opinionated about how it represents some of the nested objects: e.g., it will use lists (“L”) rather than sets (“SS”, “NS”, “BS”)." },

        { names: ["toMapValuesJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toMapValues(Map) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toS3Object"], kind: CompletionItemKind.Method, documentation: "Converts the key, bucket and region into the DynamoDB S3 Object representation. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toS3ObjectJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toS3Object(String key, String bucket, String region) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["toS3Object"], kind: CompletionItemKind.Method, documentation: "Converts the key, bucket, region and optional version into the DynamoDB S3 Object representation. This returns an object that describes the DynamoDB attribute value." },

        { names: ["toS3ObjectJson"], kind: CompletionItemKind.Method, documentation: "The same as $util.dynamodb.toS3Object(String key, String bucket, String region, String version) : Map, but returns the DynamoDB attribute value as a JSON encoded string." },

        { names: ["fromS3ObjectJson"], kind: CompletionItemKind.Method, documentation: "Accepts the string value of a DynamoDB S3 Object and returns a map that contains the key, bucket, region and optional version." },
    ]
}] as Array<AutocompleteData.CompletionItemSettings>;