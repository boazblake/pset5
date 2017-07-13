const { writeFileSync } = require('fs') 

exports.save = (filepath, data) => 
  writeFileSync(filepath, data, 'utf8')
