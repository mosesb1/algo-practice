class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    } 
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length += 1;
        return this;
    }
    shift(){
        if(!this.head) return undefined;
        let removedNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            let nextNode = removedNode.next;
            removedNode.next = null;
            nextNode.prev = null;
            this.head = nextNode;
        }
        this.length -= 1;
        return removedNode;
    }
    pop(){
        if(!this.tail) return undefined;
        let removedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            removedNode.prev.next = null;
            this.tail = removedNode.prev;
            removedNode.prev = null;
        }
        this.length -= 1;
        return removedNode;
    }
    get(position){
        if(position < 0 || position >= this.length){
            return null;
        }
        let currentNode;
        if(position < Math.floor(this.length / 2)){
            let counter = this.length - 1 - position;
            currentNode = this.tail;
            while(counter){
                currentNode = currentNode.prev;
                counter--;
            }
        } else {
            let counter = position;
            currentNode = this.head;
            while(counter){
                currentNode = currentNode.next;
                counter--;
            }
        }
        return currentNode;
    }
    set(position, val){
        let foundNode = this.get(position);
        if(!foundNode){
            return false;
        } else {
            foundNode.val = val;
            return true;
        }
    }
    remove(position){
        if(position < 0 || position >= this.length) return undefined;
        if(position === 0 || position === this.length - 1){
            return !position ? this.shift() : this.pop();
        }
        let removedNode = this.get(position);
        removedNode.next.prev = removedNode.prev;
        removedNode.prev.next = removedNode.next;
        removedNode.next = null;
        removedNode.prev = null;
        this.length -= 1;
        return removedNode;
    }
    insert(position, val){
        if(position < 0 || position > this.length) return false;
        if(position === 0 || position === this.length){
            return !position ? !!this.unshift(val) : !!this.push(val);
        }
        let previousNode = this.get(position - 1);
        let newNode = new Node(val);
        previousNode.next.prev = newNode;
        newNode.next = previousNode.next;
        newNode.prev = previousNode;
        previousNode.next = newNode;
        this.length -= 1;
        return true;
    }
    reverse(){
        let currentNode = this.head;
        while(currentNode){
            [currentNode.next, currentNode.prev] = [currentNode.prev, currentNode.next];
            currentNode = currentNode.prev;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }
}

module.exports = {
    DoublyLinkedList,
    Node
}