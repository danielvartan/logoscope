import * as vscode from "vscode";
// Use helper function to safely get positron api if it exists
import { tryAcquirePositronApi, inPositron } from "@posit-dev/positron";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "logoscope",
    () => {});
}
