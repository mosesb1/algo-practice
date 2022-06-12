// Stacks

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.size){
            this.last = newNode;
        } else {
            newNode.next = this.first;
        }
        this.first = newNode;
        return ++this.size;
    }
    pop(){
        if(!this.size) return null;
        let removedNode = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = removedNode.next;
        }
        removedNode.next = null;
        this.size--;
        return removedNode.value;
    }
}

// Queues

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.size){
            this.first = newNode;
        } else {
            this.last.next = newNode;
        }
        this.last = newNode;
        return ++this.size;
    }
    dequeue(){
        if(!this.size) return null;
        let removedNode = this.first;
        if(this.size === 1){
            this.last = null;
        }
        this.first = removedNode.next;
        removedNode.next = null;
        this.size--;
        return removedNode.value;
    }
}

module.exports = {
    Queue,
    Node,
    Stack
}