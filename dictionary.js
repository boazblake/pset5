const { readFileSync } = require('fs')

const byCr = /\r|\n|\r\n/


exports.load = (DS, filepath) =>
  readFileSync(filepath, 'utf8') // parse for utf-8
    .split(byCr) // split on new line or carriage return
    .slice(0, -1) // removes the last char in the array
    .reduce(DS.append, DS.mempty()) // reduces the array 

exports.check = (DS, dict, word) =>
  DS.contains(dict, word.toLowerCase())

exports.size = (DS,  dict) =>
  DS.length(dict)

exports.unload = (DS, dict) =>
  DS.unload(dict)
