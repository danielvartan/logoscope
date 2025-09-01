import * as vscode from "vscode";
// Use helper function to safely get positron api if it exists
import { tryAcquirePositronApi, inPositron } from "@posit-dev/positron";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "logoscope",
    () => {

      // console.log(`Hello from ${inPositron() ? 'Positron': 'VSCode'}!`);

      // const positron = tryAcquirePositronApi();

      // if (positron === undefined) {
      //   vscode.window.showInformationMessage("Failed to find positron api");
      //   return;
      // }

      // // Preview a URL in Positron's viewer
      // positron.window.previewUrl(
      //   vscode.Uri.parse("https://positron.posit.co/")
      // );

      // // Execute code in the active runtime
      // positron.runtime.executeCode(
      //   "python",
      //   'print("Hello Positron from the extension")',
      //   true
      // );
    }
  );

  context.subscriptions.push(disposable);
}
