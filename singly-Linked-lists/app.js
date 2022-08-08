class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SingleLinkedLIst {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift(val) {
    if (!this.head) return undefined;
    var current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    var counter = 0;
    var current = this.head;
    while (index !== counter) {
      counter++;
      current = current.next;
    }
    return current;
  }
  set(val, index) {
    var foundMe = this.get(index);
    if (foundMe) {
      foundMe.val = val;
      return true;
    }
    return false;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    var newNode = new Node(val);
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(val, index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop(val);
    if (index === 0) return this.shift(val);
    var prev = this.get(index - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = this.head;
    var current = this.head;
    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}
var List = new SingleLinkedLIst();
