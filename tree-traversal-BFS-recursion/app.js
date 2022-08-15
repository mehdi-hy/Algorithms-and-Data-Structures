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
    let node = this.root;
    let queue = [];
    let visited = [];
    queue.push(node);
    const traverse = (queue) => {
      if (!queue.length) return;
      node = queue.shift();
      visited.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      traverse(queue);
    };
    traverse(queue);
    return visited;
  }
  DFS() {
    let visited = [];
    let current = this.root;
    function traverse(current) {
      visited.push(current.value);
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
      return;
    }

    traverse(current);
    return visited;
  }
  DFSPostOder() {
    let visited = [];
    let current = this.root;
    const traverse = (current) => {
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
      visited.push(current.value);
      return;
    };
    traverse(current);
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
