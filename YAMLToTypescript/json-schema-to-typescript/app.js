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
jsToTs.compileFromFile(file)
  .then(ts => fs.writeFileSync('./json-schema-to-typescript/person.d.ts', ts))

// RUN : node json-schema-to-typescript/app