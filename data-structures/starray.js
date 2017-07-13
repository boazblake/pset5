module.exports = class StArray {
  static cons(x, xs) { 
    xs.push(x)
    return xs
  }
  
  static append(xs, ys) {
    return Array.isArray(ys) ? xs.concat(ys) : StArray.cons(ys, xs)
  }

  static mempty() {
    return []
  }

  static contains(xs, x) {
    return xs.includes(x)
  }

  static length(xs) {
    return xs.length
  }

  static unload(xs) {
    xs = undefined
  }
}
