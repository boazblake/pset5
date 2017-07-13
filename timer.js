const { Stopwatch } = require('node-stopwatch')


exports.time = f => {
  const timer = Stopwatch.create()

  timer.start()
  
  const res = f()

  const secs = timer.elapsed.milliseconds

  timer.stop()

  return [ res, secs ]
}

