// json-schema-to-typescript
//import { compileFromFile } from 'json-schema-to-typescript'
//import { writeFileSync } from 'fs'
const fs = require("fs");
const jsToTs = require("json-schema-to-typescript");

const file = "./json-schema-to-typescript/person.json";

/*async function generate() {
  fs.writeFileSync('person.d.ts', await jsToTs.compileFromFile(file))
}

generate();*/


// compile from file
//jsToTs.compileFromFile(file)
//  .then(ts => fs.writeFileSync('./json-schema-to-typescript/person.d.ts', ts))

// RUN : node spec2Ts/app


//import { printer } from "@spec2ts/core";
//import { parseOpenApiFile } from "@spec2ts/openapi";

const core = require("@spec2ts/core");
const openapi = require("@spec2ts/openapi");

async function generateSpec(path) {
  var result = await openapi.parseOpenApiFile(path, { cwd: getAssetsPath() });

  console.log('------------------------------');

  var content = core.printer.printNodes(result.all);
  //console.log(content);
  //const output = core.cli.getOutputPath(path);
  // console.log(output);
  //await core.cli.mkdirp(output);
  //return;
  await core.cli.writeFile(
    'tests/assets/ts/test.d.ts',
    content
  );
}
const path = "tests/assets/nested-api.yml";
generateSpec(path);

function getAssetsPath(file) {
  //import * as path from "path";
  const path = require("path");
  return file ?
      path.join(__dirname, "tests/assets", file) :
      path.join(__dirname, "tests/assets");
}