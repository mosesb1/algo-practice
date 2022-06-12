const {Node, PriorityQueue} = require('./heaps');

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex, weight){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2, weight){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push({val: v2, weight});
            this.adjacencyList[v2].push({val: v1, weight})
        }
    }
    shortestPath(start, end){
        const distances = {};
        const queue = new PriorityQueue();
        const previous = {};
        Object.keys(this.adjacencyList).forEach((vertex) => {
            distances[vertex] = vertex === start ? 0 : Infinity;
            previous[vertex] = null;
            queue.enqueue(vertex, vertex === start ? 0 : Infinity);
        })
        while(queue.values.length){
            let node = queue.dequeue();
            if(node.val === end) {
                const path = [];
                let current = node.val;
                while(true){
                    path.push(current);
                    current = previous[current];
                    if(!current) break;
                }
                return path.reverse();
            };
            this.adjacencyList[node.val].forEach((neighbor) => {
                let distance = neighbor.weight + distances[node.val];
                if(distance < distances[neighbor.val]){
                    distances[neighbor.val] = distance;
                    previous[neighbor.val] = node.val;
                    queue.enqueue(neighbor.val, distances[neighbor.val]);
                }
            })
        }
    }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A","B",4);
graph.addEdge("A","C",2);
graph.addEdge("B","E",3);
graph.addEdge("C","D",2);
graph.addEdge("C","F",4);
graph.addEdge("D","F",1);
graph.addEdge("F","E",1);
graph.addEdge("D","E",3);
console.log(graph.adjacencyList);
console.log(graph.shortestPath("A","E"));