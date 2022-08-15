class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    if (this.values.length === 0) {
      this.values.push(newNode);
      return this.values;
    }

    this.values.push(newNode);
    let currentIdx = this.values.length - 1;
    const bubbleUp = (currentIdx) => {
      let current = this.values[currentIdx];
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx >= 0) {
        console.log('hello');
        let parent = this.values[parentIdx];
        if (current.priority < parent.priority) {
          [this.values[parentIdx], this.values[currentIdx]] = [
            this.values[currentIdx],
            this.values[parentIdx],
          ];

          bubbleUp(parentIdx);
        }
      }
    };
    bubbleUp(currentIdx);
    return this.values;
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    this.values[0] = end;
    this.sinkDown();
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
console.log(ER.enqueue('glass in foot', 3));

//  let newNode = new Node(val, priority);
//     this.values.push(newNode);
//     this.bubbleUp();
//   }
//   bubbleUp() {
//     let idx = this.values.length - 1;
//     let element = this.values[idx];
//     while (idx > 0) {
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.values[parentIdx];
//       if (parent.priority >= element.priority) break;
//       [this.values[parentIdx], this.values[idx]] = [
//         this.values[idx],
//         this.values[parentIdx],
//       ];
//       idx = parentIdx;
//     }
