const { readFileSync } = require('fs')


const punctuation =
  /[\u2000-\u206F\u2E00-\u2E7F\!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~\s]+/g

const isNotEmpty = str =>
  str != ''

const isWord = x =>
  /^[a-zA-Z\']+$/.test(x)

const removeLeadingApostrophe = x =>
  x.replace(/^\'/, '')


exports.read = filepath =>
  readFileSync(filepath, 'utf8') //returns a string
    .split(punctuation) //returns an array of words without punctuation
    .filter(isWord) // returns an [alpha]
    .map(removeLeadingApostrophe) // clue is in the title
    .filter(isNotEmpty) // return an array wihtout empty strings