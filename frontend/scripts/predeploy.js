const fs = require("fs");
const ora = require("ora");

// Read the package.json-file and make it usable to work with by parsing
const package = JSON.parse(fs.readFileSync("../package.json"));

// Get the current version as array of current version-types "major.minor.patch"
const currentVersion = package.version;
const versions = currentVersion.split(".").map(v => Number(v));

// Read what type of update we deploy and increase the version accordingly
const bumpVariant = process.argv[2];
switch (bumpVariant) {
  case "--major":
    versions[0] = versions[0] + 1;
    versions[1] = 0;
    versions[2] = 0;
    break;
  case "--minor":
    versions[1] = versions[1] + 1;
    versions[2] = 0;
    break;
  case "--patch":
    versions[2] = versions[2] + 1;
    break;

  default:
    throw Error(`no matching bump-variant provided: ${bumpVariant}, use one of these: --major, --minor, --patch`);
}

// Write changes back to package.json
package["version"] = versions.join(".");
fs.writeFileSync("../package.json", JSON.stringify(package, 0, 2));

// Update strings to be used in app
const getDirectories = source =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

function getValidMonth() {
  const month = new Date().getMonth() + 1;
  if (month < 10) return "0" + month;
  else return month;
}

for (const locale of getDirectories("../public/locales")) {
  const pathToLocalization = "../public/locales/" + locale + "/translation.json";

  const translation = JSON.parse(fs.readFileSync(pathToLocalization));
  const date = new Date();

  translation["Version Number"] = `V ${versions.join(".")}`;
  translation["Copyright"] = `Copyright © ${date.getFullYear()} L. Schönmann`;
  translation["Last updated on"] = `Last updated on ${date.getFullYear()}-${getValidMonth()}-${date.getDate()}`;

  fs.writeFileSync(pathToLocalization, JSON.stringify(translation, null, 2));
}
