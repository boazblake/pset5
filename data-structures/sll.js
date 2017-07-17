class Node {
  constructor(value) {
    this.word = value
    this.next = null
  }
}

module.exports = class LinkedList {
  static cons(){
    this.head = null
  }

  static mempty(){
    return Node
  }

  static _append(node, word) {
    console.log(node)
    console.log(word)
    return new node(word)
  }

  // append::Node => word => Node
  static append(node, word){
    console.log('node', node)
    console.log('word', word)
    if (LinkedList.head) {
      let current = LinkedList.head.next
      while (current) {
        current = current.next
      }
     return  current= LinkedList._append(node, word)
    }
    return LinkedList.head = LinkedList._append(node, word)
  }


}


