 const input = {
    $schema: 'http://json-schema.org/draft-03/schema',
    id: 'http://mycompany.com/api/referencing.json',
    title: 'Referencing',
    type: 'object',
    properties: {
      ref: {
        $ref: 'test/resources/ReferencedType.json'
      }
    },
    required: ['ref'],
    additionalProperties: false
  }
  

const fs = require("fs");
const jsToTs = require("json-schema-to-typescript");
// compile from file
/*jsToTs.compileFromFile("test/resources/ReferencedType.json").then(ts => fs.writeFileSync('./json-schema-to-typescript/schema/ReferencedType.d.ts', ts));

jsToTs.compileFromFile("test/resources/DefinitionsOnly.json").then(ts => fs.writeFileSync('./json-schema-to-typescript/schema/DefinitionsOnly.d.ts', ts));

jsToTs.compileFromFile("test/resources/Enum.json").then(ts => fs.writeFileSync('./json-schema-to-typescript/schema/Enum.d.ts', ts));

jsToTs.compileFromFile("test/resources/ReferencedTypeWithoutID.json").then(ts => fs.writeFileSync('./json-schema-to-typescript/schema/ReferencedTypeWithoutID.d.ts', ts));

jsToTs.compileFromFile("test/resources/BaseType.1.json").then(ts => fs.writeFileSync('./json-schema-to-typescript/schema/BaseType.1.d.ts', ts));

jsToTs.compileFromFile("test/resources/BaseType.2.json").then(ts => fs.writeFileSync('./json-schema-to-typescript/schema/BaseType.2.d.ts', ts));
*/
jsToTs.compileFromFile("test/resources/other/ReferencingType.json",'MySchema').
  then(ts => fs.writeFileSync('./json-schema-to-typescript/schema/ReferencingType.d.ts', ts));

  // RUN : node json-schema-to-typescript/test
