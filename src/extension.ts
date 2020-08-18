// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import registerProviders from "./providers";
import { VelocityPreviewProvider } from "./previewContentProvider";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.info(`appsync resolver extension activated!`);

  registerProviders(context);
  VelocityPreviewProvider.register(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}
