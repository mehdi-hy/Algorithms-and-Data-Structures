class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    return this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;

    while (this.values[idx] > this.values[Math.floor((idx - 1) / 2)]) {
      let parentIdx = Math.floor((idx - 1) / 2);
      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ];
      idx = parentIdx;
    }
    return idx;
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    while (true) {
      let swap = null;
      let parent = this.values[idx];
      let rightChildIdx = 2 * idx + 2;
      let rightChild = this.values[rightChildIdx];
      let leftChildIdx = 2 * idx + 1;
      let leftChild = this.values[leftChildIdx];

      if (rightChildIdx < length) {
        if (parent < rightChild) {
          swap = rightChildIdx;
        }
      }
      if (leftChildIdx < length) {
        if (parent < leftChild && leftChild > rightChild) {
          swap = leftChildIdx;
        }
      }
      if (swap === null) {
        break;
      }
      this.values[idx] = this.values[swap];
      this.values[swap] = parent;
      idx = swap;
    }
  }
}
let heap = new MaxBinaryHeap();
heap.extractMax();
console.log(heap);

//  const length = this.values.length;
//     const element = this.values[0];
//     while (true) {
//       let leftChildIdx = 2 * idx + 1;
//       let rightChildIdx = 2 * idx + 2;
//       let leftChild, rightChild;
//       let swap = null;
//       if (leftChildIdx < length) {
//         leftChild = this.values[leftChildIdx];
//         if (leftChild > element) {
//           swap = leftChildIdx;
//         }
//       }
//       if (rightChildIdx < length) {
//         rightChild = this.values[rightChildIdx];
//         if (
//           (swap === null && rightChild > element) ||
//           (swap !== null && rightChild > leftChild)
//         ) {
//           swap = rightChildIdx;
//         }
//       }
//       if (swap === null) break;

//       this.values[idx] = this.values[swap];
//       this.values[swap] = element;
//       idx = swap;
//     }
//   }
