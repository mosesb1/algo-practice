/*
vertex - node
edge - connection b/w nodes
weighted/unweighted - values assigned to edges (think distance on a map)
directed/undirected - directionality assigned to edges
*/

class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1)
        }
    }
    removeEdge(v1, v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex1 => vertex1 !== v2);
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex2 => vertex2 !== v1);
        }
    }
    removeVertex(vertex){
        this.adjacencyList[vertex].forEach((edge) => {
            this.removeEdge(vertex,edge);
        })
        delete this.adjacencyList[vertex];
    }
    dfsRec(start){
        const results = [], visited = {}, adjList = this.adjacencyList;
        function traverse(vertex){
            if(!vertex) return;      
            results.push(vertex);
            visited[vertex] = true;
            for(let i = 0; i < adjList[vertex].length; i++){
                if(!visited[adjList[vertex][i]]){
                    traverse(adjList[vertex][i]);
                }
            }
        }
        traverse(start);
        return results
    }
    dfsIter(start){
        const stack = [], visited = {}, result = [];
        stack.push(start);
        while(stack.length){
            let vertex = stack.pop();
            if(!visited[vertex]){
                result.push(vertex);
                visited[vertex] = true;
                this.adjacencyList[vertex].forEach((neighbor) => {
                    stack.push(neighbor);
                })
            }
        }
        return result;
    }
    bfs(start){
        const result = [], visited = {}, queue = [];
        queue.push(start);
        while(queue.length){
            let vertex = queue.pop();
            visited[vertex] = true;
            result.push(vertex);
                this.adjacencyList[vertex].forEach((neighbor) => {
                    if(!visited[neighbor]){
                        visited[neighbor] = true
                        queue.unshift(neighbor);
                    }
                })
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("B", "A");
graph.addEdge("C", "A");
graph.addEdge("B", "D");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "C");
graph.addEdge("E", "F");
console.log(graph.dfsRec("A"));
console.log(graph.dfsIter("A"));
console.log(graph.bfs("A"))
console.log(graph.adjacencyList);

module.exports = Graph;