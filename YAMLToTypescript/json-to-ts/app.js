// JsonToTs
const JsonToTS = require('json-to-ts');
const fs = require("fs");
const file = "./json-to-ts/person.json";


const json = {
  cats: [
    { name: 'Kittin' },
    { name: 'Mittin' }
  ],
  favoriteNumber: 42,
  favoriteWord: 'Hello'
}

JsonToTS(json).forEach(ts => {
  console.log(ts);
  // fs.writeFileSync('./json-to-ts/person.d.ts', ts)
})


// RUN : node json-to-ts/app