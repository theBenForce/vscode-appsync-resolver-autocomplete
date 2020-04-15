import { AutocompleteData } from "../dataTypes";
import { CompletionItemKind } from "vscode";

export default [{
    prefixes: ['$util.time.'],
    properties: [
        { names: ["nowISO8601"], kind: CompletionItemKind.Method, documentation: "Returns a String representation of UTC in [ISO8601 format](https://en.wikipedia.org/wiki/ISO_8601)." },
        { names: ["nowEpochSeconds"], kind: CompletionItemKind.Method, documentation: "Returns the number of seconds from the epoch of 1970-01-01T00:00:00Z to now." },
        { names: ["nowEpochMilliSeconds"], kind: CompletionItemKind.Method, documentation: "Returns the number of milliseconds from the epoch of 1970-01-01T00:00:00Z to now." },

        { names: ["nowFormatted"], kind: CompletionItemKind.Method, documentation: "Returns a string of the current timestamp in UTC using the specified format from a String input type." },

        { names: ["nowFormatted"], kind: CompletionItemKind.Method, documentation: "Returns a string of the current timestamp for a timezone using the specified format and timezone from String input types." },

        { names: ["parseFormattedToEpochMilliSeconds"], kind: CompletionItemKind.Method, documentation: "Parses a timestamp passed as a String, along with a format, and return the timestamp as milliseconds since epoch." },

        { names: ["parseFormattedToEpochMilliSeconds"], kind: CompletionItemKind.Method, documentation: "Parses a timestamp passed as a String, along with a format and time zone, and return the timestamp as milliseconds since epoch." },

        { names: ["parseISO8601ToEpochMilliSeconds"], kind: CompletionItemKind.Method, documentation: "Parses an ISO8601 timestamp, passed as a String, and return the timestamp as milliseconds since epoch." },

        { names: ["epochMilliSecondsToSeconds"], kind: CompletionItemKind.Method, documentation: "Converts an epoch milliseconds timestamp to an epoch seconds timestamp." },

        { names: ["epochMilliSecondsToISO8601"], kind: CompletionItemKind.Method, documentation: "Converts a epoch milliseconds timestamp to an ISO8601 timestamp." },

        { names: ["epochMilliSecondsToFormatted"], kind: CompletionItemKind.Method, documentation: "Converts a epoch milliseconds timestamp, passed as long, to a timestamp formatted according to the supplied format in UTC." },

        { names: ["epochMilliSecondsToFormatted"], kind: CompletionItemKind.Method, documentation: "Converts a epoch milliseconds timestamp, passed as a long, to a timestamp formatted according to the supplied format in the supplied timezone." },
    ]
}] as Array<AutocompleteData.CompletionItemSettings>;