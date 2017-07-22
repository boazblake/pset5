module.exports = class Cons {
  constructor(head, tail){
    this.head = head
    this.tail = tail
  }

  static cons(head, tail) {
    return new Cons(head, tail)
  }
  // append::Node => word => Node
  static append(xs, ys){
    return Array.isArray(ys) ? xs.concat(ys) : Cons.cons(ys, xs)
  }

  static mempty(){
    return Cons.cons
  }

  static contains(xs, x) {
    return xs.head === x
  }

  static length(xs) {
    return xs.length
  }

  static unload(xs) {
    xs = undefined
  }

}


