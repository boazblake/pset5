const { read } = require('./reader')
const { time } = require('./timer')
const { load, check, size, unload } = require('./dictionary')
const { format } = require('./formatter')
const { save } = require('./fileWriter')
const { print } = require('./printer')
const { StArray } = require('./data-structures')


const main = DS => {
// destructering the arguments, throwing away the first two.
  const [ _, __, dictPath, textPath, outputPath ]  = process.argv

// null checks
  if(typeof dictPath == 'undefined')
    throw new Error('Must provide a dictionary.')

  if(typeof textPath == 'undefined')
    throw new Error('Must provide a text file.')

//  time returns an array of results and seconds
  const [ dict, loadTime ] = time(_=> load(DS, dictPath))

  const words = read(textPath)

  const [ misspellings, checkTime ] = time(_ => words.filter(x => !check(DS, dict, x)))

  const [ dictLength, sizeTime ] = time(_ => size(DS, dict))

  const [ ___, unloadTime ] = time(_ => unload(DS, dict))

  const results =
    { misspellings: misspellings.join('\r\n')
    , count: misspellings.length
    , dict: dictLength
    , words: words.length
    }

  const timings =
    { load: loadTime
    , check: checkTime
    , size: sizeTime
    , unload: unloadTime
    }

  const data = format(results, timings)

  console.log(outputPath)

  if(typeof outputPath != 'undefined')
    save(outputPath, data)

  print(data)
}

main(StArray)
