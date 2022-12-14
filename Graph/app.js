class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList) {
      this.addVertex[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push[v2];
    this.adjacencyList[v2].push[v1];
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
  DFR() {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList(function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push[vertex];
      adjacencyList.forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  DFI(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
    }
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
      }
    });
  }
}

//  if (!this.adjacencyList[vertex]) {
//    this.adjacencyList[vertex] = [];
//  }

// this.adjacencyList[v1].push(v2);
// this.adjacencyList[v2].push(v1);

//  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
//       (v) => v !== vertex2
//     );
//     this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
//       (v) => v !== vertex1
//     );
//   }
//   removeVertex(vertex) {
//     while (this.adjacencyList[vertex].length) {
//       const adjacentVertex = this.adjacencyList[vertex].pop();
//       this.removeEdge(vertex, adjacentVertex);
//     }
//     delete this.adjacencyList[vertex];
