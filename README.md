# LogoScope

<!-- badges: start -->
[![Project Status: Active - The project has reached a stable, usable state and is being actively developed.](https://img.shields.io/badge/repo%20status-Active-4cc61e.png)](https://www.repostatus.org/#active)
[![License: GPLv3](https://img.shields.io/badge/license-GPLv3-bd0000.png)](https://www.gnu.org/licenses/gpl-3.0)
[![](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.png)](CODE_OF_CONDUCT.md)
<!-- badges: end -->

## Overview

`LogoScope` is a Visual Studio Code extension that provides syntax highlighting for the [NetLogo](https://www.netlogo.org/) programming language, covering all NetLogo file extensions to date (`.nlogo`, `.nlogo3d`, `.nls`, `.nlogox`, `.nlogox3d`). It builds on [akash raj](https://github.com/akashrajkn)'s [NetLogo Syntax Highlighting](https://github.com/akashrajkn/language-netlogo-code) extension that was last updated in 2020.

> [!IMPORTANT]
> `LogoScope` is an independent project with no affiliation to [NetLogo](https://www.netlogo.org/) or its developers.

![Syntax highlighting](images/code.png)

## Installation

You can install the extension directly from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com) or by searching for `LogoScope` in the extensions panel.

To mannually install the extension, copy the source files into the `<user home>/.vscode/extensions` folder and restart the IDE.

## How to Contribute

[![](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.png)](CODE_OF_CONDUCT.md)

Contributions are welcome! Whether you want to report bugs, suggest features, or improve the code or documentation, your input is highly valued. Please check the [issues tab](https://github.com/danielvartan/logoscope/issues) for existing issues or to open a new one.

The syntax highlighting is designed to closely match NetLogo's original highlighting. You can use the test files in the `nlogo` folder to evaluate the highlighting accuracy. If you notice any discrepancies or have suggestions for improvement, please don't hesitate to open an issue or submit a pull request.

## License

[![](https://img.shields.io/badge/license-GPLv3-bd0000.png)](https://www.gnu.org/licenses/gpl-3.0)

```text
Copyright (C) 2025 Daniel Vartanian

{LogoScope} is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or (at your option) any later
version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program. If not, see <https://www.gnu.org/licenses/>.
```

## Useful Resources

- [NetLogo Dictionary](https://docs.netlogo.org/dictionary.html)
- [TextMate Grammars](https://macromates.com/manual/en/language_grammars)
- [Positron Extension Template](https://github.com/posit-dev/positron-extension-template)
- [Positron Extension Development Guide](https://positron.posit.co/extension-development.html)
- [VSCode Syntax Highlight Guide](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
- [VSCode Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [vscode-R-syntax](https://github.com/REditorSupport/vscode-R-syntax)

## Acknowledgements

This extension is based on the work of [akash raj](https://github.com/akashrajkn)'s [NetLogo Syntax Highlighting](https://github.com/akashrajkn/language-netlogo-code) extension, last updated in 2020.
