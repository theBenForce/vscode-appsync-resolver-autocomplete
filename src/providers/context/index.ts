
import { AutocompleteData } from '../dataTypes';
import identity from "./identity";
import info from "./info";

export default [{
    prefixes: ['$ctx.', '$context.'],
    properties: [
        { names: ["arguments"], documentation: "A map that contains all GraphQL arguments for this field." },
        { names: ["identity"], documentation: "An object that contains information about the caller." },
        { names: ["source"], documentation: "A map that contains the resolution of the parent field." },
        { names: ["stash"], documentation: "The stash is a map that is made available inside each resolver and function mapping template. The same stash instance lives through a single resolver execution. This means that you can use the stash to pass arbitrary data across request and response mapping templates, and across functions in a pipeline resolver. The stash exposes the same methods as the Java Map data structure." },
        { names: ["result"], documentation: "A container for the results of this resolver. This field is only available to response mapping templates." },
        { names: ["prev.result"], documentation: "It represents the result of whatever previous operation was executed in a pipeline resolver. If the previous operation was the pipeline resolver request mapping template, then `$ctx.prev.result` represents the output of the evaluation of the template, and is made available to the first function in the pipeline. If the previous operation was the first function, then `$ctx.prev.result` represents the output of the first function, and is made available to the second function in the pipeline. If the previous operation was the last function, then `$ctx.prev.result` represents the output of the first function, and is made available to the pipeline resolver response mapping template." },
        { names: ["info"], documentation: "An object that contains information about the GraphQL request." }
    ]
},
...identity,
...info
] as Array<AutocompleteData.CompletionItemSettings>;