// left child stored at 2n + 1
// right child stored at  2n + 2
// parent is stored at floor((n-1)/2)

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp(){
        let index = this.values.length - 1;
        let parent = Math.floor((index - 1)/2);
        while(true){
            if(this.values[parent] < this.values[index]){
                [this.values[parent],this.values[index]] = [this.values[index], this.values[parent]];
            } else {
                break;
            }
            index = parent;
            parent = Math.floor((index - 1)/2);
        }
    }
    extractMax(){
        [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1],[this.values[0]]];
        let max = this.values.pop();
        this.bubbleDown();
        return max;
    }
    bubbleDown(){
        let index = 0;
        let firstChild = 1;
        let secondChild = 2;
        while(true){
            let maxChild = this.values[firstChild] > this.values[secondChild] ? firstChild : secondChild
            if(this.values[index] < this.values[maxChild]){
                [this.values[index], this.values[maxChild]] = [this.values[maxChild], this.values[index]];
            } else {
                break;
            }
            index = maxChild;
            firstChild = 2*index + 1 >= this.values.length ? index : 2*index + 1;
            secondChild = 2*index + 2 >= this.values.length ? firstChild : 2*index + 2;
        }
    }
}

class Node {
    constructor(val,priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let node = new Node(val,priority);
        this.values.push(node);
        this.bubbleUp();
    }
    bubbleUp(){
        let index = this.values.length-1;
        let parent = Math.floor((index-1)/2);
        while(true){
            if(this.values[parent] && this.values[index].priority < this.values[parent].priority){
                [this.values[index], this.values[parent]] = [this.values[parent], this.values[index]];
            } else {
                break;
            }
            index = parent;
            parent = Math.floor((index-1)/2);
        }
    }
    dequeue(){
        [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]];
        let removed = this.values.pop();
        this.bubbleDown();
        return removed;
    }
    bubbleDown(){
        let index = 0;
        let firstChild = 1;
        let secondChild = 2;
        while(true){
            let minChild = this.values[firstChild] && this.values[secondChild] ? (this.values[firstChild].priority < this.values[secondChild].priority ? firstChild : secondChild) : this.values[firstChild] ? firstChild : index;
            if(this.values[index] && this.values[index].priority > this.values[minChild].priority){
                [this.values[index], this.values[minChild]] = [this.values[minChild], this.values[index]];
            } else {
                break;
            }
            index = minChild;
            firstChild = 2*index + 1;
            secondChild = 2*index + 2;
        }
    }
}

// let maxHeap = new MaxBinaryHeap();
// maxHeap.insert(41);
// maxHeap.insert(39);
// maxHeap.insert(33);
// maxHeap.insert(18);
// maxHeap.insert(27);
// maxHeap.insert(12);
// maxHeap.insert(55);

// const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue(3,1);
// priorityQueue.enqueue(3,2);
// priorityQueue.enqueue(3,3);
// priorityQueue.enqueue(5,1);
// priorityQueue.dequeue();
// console.log(priorityQueue.values);

module.exports = {
    Node,
    PriorityQueue
}