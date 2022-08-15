class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex2].filter((v1) => {
      return v1 !== vertex2;
    });
    this.adjacencyList[vertex1].filter((v2) => {
      return v2 !== vertex1;
    });
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let v = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    let adjacencyList = this.adjacencyList;
    const DFS = (start) => {
      if (!start) return null;
      visited[start] = true;
      result.push(start);
      adjacencyList[start].forEach((item) => {
        if (!visited[item]) {
          return DFS(item);
        }
      });
    };
    DFS(start);
    return result;
  }
  DFI(start) {
    let stack = [start];
    let visited = {};
    let result = [];
    let vertex;
    visited[start] = true;
    while (stack.length) {
      vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((item) => {
        if (!visited[item]) {
          visited[item] = true;
          stack.push(item);
        }
      });
    }
    return result;
  }
  BFS(vertex) {
    let result = [vertex];
    let visited = {};
    visited[vertex] = true;
    let queue = [vertex];
    while (queue.length) {
      let current = queue.pop();
      this.adjacencyList[current].forEach((item) => {
        if (!visited[item]) {
          visited[item] = true;
          result.push(item);
          queue.unshift(item);
        }
      });
    }
    return result;
  }
}
let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.DFI('A'));
console.log(g.BFS('A'));
