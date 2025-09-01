# # For Development Use Only (Comment the Code After Use)

# # Scripts

# npm install

# npm run js-yaml-nlogo
# npm run js-yaml-nlogox
# npm run vscode:prepublish
# npm run compile
# npm run lint
# npm run watch
# npm run pretest
# npm run test:grammar
# code --install-extension logoscope-0.1.0.vsix

# # TextMate

# yaml > json: `npx js-yaml syntaxes/nlogo.yaml > syntaxes/nlogo.json`
# json > yaml: `npx json2yaml syntaxes/nlogo.json > syntaxes/nlogo.yaml`
# Test: `F5`
# Test: vscode-tmgrammar-test tests/*.nlogo
# Compile: `vsce package`

# # Visual Studio Code

# vsce login danielvartan
# vsce package
# vsce publish

# # Open VSX Registry

# npx ovsx create-namespace danielvartan -p <token>
# npx ovsx publish logoscope-#.#.#.vsix -p <token>
# npx ovsx publish -p <token>
# npm version patch

# # Git

# git tag
# git tag v#.#.#
# git push --tags
