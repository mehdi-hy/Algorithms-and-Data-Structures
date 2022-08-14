class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }
  get(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    return this.find(current, value);
  }
  find(current, value) {
    if (current == value) {
      return true;
    } else {
      if (current.right) {
        find(current.right, value);
      }
      if (current.left) {
        find(current.left, value);
      } else {
        return false;
      }
    }
  }
  findIterative(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (current.value == value) {
        return true;
      } else {
        if (current.value > value && current.right) {
          current = current.value;
        }
        if (current.value < value && current.left) {
          current = current.left;
        } else {
          return false;
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(5);
tree.insert(7);
tree.get(10);
