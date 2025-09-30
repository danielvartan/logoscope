/* global process, console */

import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const pkgPath = path.join(process.cwd(), "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

// console.log(pkg);

const citationData = {
  "cff-version": "1.2.0",
  message: `To cite package "${pkg.displayName}" in publications use:`,
  type: "software",
  license: "GPL-3.0-or-later",
  title: `${pkg.displayName}: NetLogo syntax highlighting for Visual Studio Code`,
  version: pkg.version,
  identifiers: [
    {
      type: "url",
      value: pkg.homepage,
    },
  ],
  authors: [
    {
      "family-names": "Vartanian",
      "given-names": "Daniel",
      email: pkg.author.email,
      orcid: "https://orcid.org/0000-0001-7782-759X",
    },
  ],
  "preferred-citation": {
      type: "software",
      title: `${pkg.displayName}: NetLogo syntax highlighting for Visual Studio Code`,
      authors: [
        {
          "family-names": "Vartanian",
          "given-names": "Daniel",
          email: pkg.author.email,
          orcid: "https://orcid.org/0000-0001-7782-759X",
        },
      ],
      year: new Date().getFullYear(),
      url: pkg.homepage,
      notes: "Visual Studio Code extension",
    },
  contact: [
    {
      "family-names": "Vartanian",
      "given-names": "Daniel",
      email: pkg.author.email,
      orcid: "https://orcid.org/0000-0001-7782-759X",
    },
  ],
  "repository-code": pkg.repository.url,
  url: pkg.homepage,
};

const cffContent = yaml.dump(citationData);

fs.writeFileSync("CITATION.cff", cffContent, "utf8");

console.log("CITATION.cff generated!");
