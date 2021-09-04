// JsonToTs
const JsonToTS = require('json-to-ts');

const file = "./json-schema-to-typescript/person.json";


const json = {
  cats: [
    { name: 'Kittin' },
    { name: 'Mittin' }
  ],
  favoriteNumber: 42,
  favoriteWord: 'Hello'
}

JsonToTS(json).forEach(typeInterface => {
  console.log(typeInterface)
})


// RUN : node jsonToTS/app