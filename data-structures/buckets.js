module.exports = class Buckets {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }


  static cons(head, tail) {
    return new Buckets(head, tail)
  }

  static add(i, x, xs) {
    xs.push(x)
    return xs
  }

  static getBucketIndex (word){
    return word.match(/\b[a-f]/)
      ? 0
      : word.match(/\b[g-m]/)
        ? 1
        : word.match(/\b[n-t]/)
          ? 2
          : word.match(/\b[u-z]/)
          ? 3
          : null
  }

  static bucketArray(head,tail) {
    const bucketIndex = head =>
      Buckets.getBucketIndex(head)

    return Buckets.add(bucketIndex(head), head, tail)
  }

  static append(xs, ys) {
    return Array.isArray(ys) ? xs.concat(ys) : Buckets.bucketArray(ys, xs)
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