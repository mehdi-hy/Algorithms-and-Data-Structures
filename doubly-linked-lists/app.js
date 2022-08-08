class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class SingleLinkedLIst {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(val) {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.head.next = null;
      this.tail.prev = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    var shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let current = this.head;
      var count = 0;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      let current = this.tail;
      var count = this.length - 1;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(val, index) {
    var foundMe = get(index);
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
    var prev = get(index - 1);
    var temp = prev.next;
    var newNode = new Node(val);
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = temp;
    temp.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return this.pop(val);
    if (index === 0) return this.shift(val);
    var removedNode = get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prv;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
