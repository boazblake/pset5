const { readFileSync } = require('fs')

const byCr = /\r|\n|\r\n/


exports.load = (DS, filepath) => 
  readFileSync(filepath, 'utf8')
    .split(byCr)
    .slice(0, -1)
    .reduce(DS.append, DS.mempty())

exports.check = (DS, dict, word) => 
  DS.contains(dict, word.toLowerCase())

exports.size = (DS,  dict) => 
  DS.length(dict)

exports.unload = (DS, dict) => 
  DS.unload(dict)

