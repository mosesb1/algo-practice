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

// left child stored at 2n + 1
// right child stored at  2n + 2
// parent is stored at floor((n-1)/2)

class MinBinaryHeap{
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
            if(this.values[parent] > this.values[index]){
                [this.values[parent],this.values[index]] = [this.values[index], this.values[parent]];
            } else {
                break;
            }
            index = parent;
            parent = Math.floor((index - 1)/2);
        }
    }
    extractMin(){
        [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1],[this.values[0]]];
        let min = this.values.pop();
        this.bubbleDown();
        return min;
    }
    bubbleDown(){
        let index = 0;
        let firstChild = 1;
        let secondChild = 2;
        while(true){
            let minChild = this.values[firstChild] < this.values[secondChild] ? firstChild : secondChild
            if(this.values[index] > this.values[minChild]){
                [this.values[index], this.values[minChild]] = [this.values[minChild], this.values[index]];
            } else {
                break;
            }
            index = minChild;
            firstChild = 2*index + 1 >= this.values.length ? index : 2*index + 1;
            secondChild = 2*index + 2 >= this.values.length ? firstChild : 2*index + 2;
        }
    }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);

let minHeap = new MinBinaryHeap();
minHeap.insert(41);
minHeap.insert(39);
minHeap.insert(33);
minHeap.insert(18);
minHeap.insert(27);
minHeap.insert(12);
minHeap.insert(55);

for(let i = 0; i < 4; i++){
    minHeap.extractMin();
    maxHeap.extractMax();
}

console.log((maxHeap.values[0] + minHeap.values[0])/2)