import * as vscode from "vscode";
import { Converter } from "aws-sdk/clients/dynamodb";
import Parser from "appsync-template-tester";

function isVelocityFile(document?: vscode.TextDocument): boolean {
  return document?.languageId === "velocity";
}

export class VelocityPreviewProvider
  implements vscode.TextDocumentContentProvider {
  onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
  onDidChange = this.onDidChangeEmitter.event;

  private contentProviderRegistration: vscode.Disposable;

  static SCHEME = `appsyncvtl`;
  static URI = vscode.Uri.parse(
    `${VelocityPreviewProvider.SCHEME}:preview.json`,
    true
  );

  constructor() {
    this.contentProviderRegistration = vscode.workspace.registerTextDocumentContentProvider(
      VelocityPreviewProvider.SCHEME,
      this
    );
  }

  provideTextDocumentContent(
    uri: vscode.Uri,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<string> {
    const editor = vscode.window.activeTextEditor;

    if (!isVelocityFile(editor?.document)) {
      console.error(`Wrong document type`);
      return `Unknown document type "${editor?.document?.languageId}"`;
    }

    const content = editor?.document?.getText() ?? ``;

    const parser = new Parser(content);

    return parser.resolve({});
  }

  async updatePreview() {}

  async onContentUpdated(
    event?: vscode.TextDocumentChangeEvent | vscode.TextEditor
  ) {
    if (!event) {
      return;
    }

    if (isVelocityFile(event.document)) {
      this.onDidChangeEmitter.fire(VelocityPreviewProvider.URI);
    }
  }

  static register(context: vscode.ExtensionContext): VelocityPreviewProvider {
    const provider = new VelocityPreviewProvider();

    context.subscriptions.push(
      vscode.workspace.onDidChangeTextDocument(
        provider.onContentUpdated.bind(provider)
      )
    );
    context.subscriptions.push(
      vscode.window.onDidChangeActiveTextEditor(
        provider.onContentUpdated.bind(provider)
      )
    );

    vscode.commands.registerCommand("appsyncVtl.showPreview", async () => {
      let doc = await vscode.workspace.openTextDocument(this.URI);
      await vscode.window.showTextDocument(doc, {
        preview: false,
        viewColumn: vscode.ViewColumn.Beside,
        preserveFocus: true,
      });
    });

    return provider;
  }
}
