class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.right) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let current = this.root;
    let queue = [current];
    let visited = [];
    while (queue.length !== 0) {
      console.log(queue);
      if (queue[0].right) {
        queue.push(queue[0].right);
      }
      if (queue[0].left) {
        queue.push(queue[0].left);
      }
      let ss = queue.shift();
      visited.push(ss.value);
    }
    return visited;
  }
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
