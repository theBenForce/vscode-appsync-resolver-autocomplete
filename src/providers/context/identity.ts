import { AutocompleteData } from "../dataTypes";
import { CompletionItemKind } from "vscode";

export default [{
    prefixes: ['$ctx.identity.', '$context.identity.'],
    properties: [
        { names: ['accountId'], kind: CompletionItemKind.Property, documentation: "The AWS account ID of the caller." },
        { names: ['claims'], documentation: 'The claims that the user has.' },
        { names: ['cognitoIdentityAuthType'], kind: CompletionItemKind.Property, documentation: 'Either `authenticated` or `unauthenticated` based on the identity type.' },
        { names: ['cognitoIdentityAuthProvider'], kind: CompletionItemKind.Property, documentation: "The external identity provider that was used to obtain the credentials used to sign the request." },
        { names: ['cognitoIdentityId'], kind: CompletionItemKind.Property, documentation: 'The Amazon Cognito identity ID of the caller.' },
        { names: ['cognitoIdentityPoolId'], kind: CompletionItemKind.Property, documentation: 'The Amazon Cognito identity pool ID associated with the caller.' },
        { names: ['defaultAuthStrategy'], kind: CompletionItemKind.Property, documentation: 'The default authorization strategy for this caller (`ALLOW` or `DENY`).' },
        { names: ['issuer'], kind: CompletionItemKind.Property, documentation: 'The token issuer.' },
        { names: ['sourceIp'], kind: CompletionItemKind.Property, documentation: 'The source IP address of the caller received by AWS AppSync. If the request doesn’t include the `x-forwarded-for header`, the source IP value contains only a single IP address from the TCP connection. If the request includes a `x-forwarded-for header`, the source IP is a list of IP addresses from the `x-forwarded-for header`, in addition to the IP address from the TCP connection.' },
        { names: ['sub'], kind: CompletionItemKind.Property, documentation: 'The UUID of the authenticated user.' },
        { names: ['user'], kind: CompletionItemKind.Property, documentation: 'The IAM user.' },
        { names: ['userArn'], kind: CompletionItemKind.Property, documentation: 'The ARN of the IAM user.' },
        { names: ['username'], kind: CompletionItemKind.Property, documentation: 'The user name of the authenticated user. In the case of `AMAZON_COGNITO_USER_POOLS` authorization, the value of *username* is the value of attribute *cognito:username*. In the case of `AWS_IAM` authorization, the value of *username* is the value of the AWS user principal. We recommend that you use `cognitoIdentityId` if you’re using *AWS IAM* authorization with credentials vended from Amazon Cognito identity pools.' }
    ]
}] as Array<AutocompleteData.CompletionItemSettings>;