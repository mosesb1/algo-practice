// Has head, tail and length property. consists of nodes w/ value and pointer
// no index

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let tail = this.tail;
        if(!this.head.next){
            this.head = null;
            this.tail = null;
        } else {
            let previous = this.head;
            let current = this.head.next;
            while(current.next){
                previous = current;
                current = previous.next
            }
            this.tail = previous;
            previous.next = null;
        }
        this.length -= 1;
        return tail;
    }
    shift(){
        if(!this.head) return undefined;
        let head = this.head;
        if(!this.head.next){
            this.tail = null;
            this.head = null;
        } else {
            this.head = head.next;
        }
        this.length -= 1;
        return head;
    }
    unshift(val){
        const newHead = new Node(val);
        newHead.next = this.head;
        if(!this.tail){
            this.tail = newHead;
        }
        this.head = newHead;
        this.length += 1;
        return this;
    }
    get(position){
        if(this.length <= position || position < 0 || typeof position !== 'number') return null;
        let currentNode = this.head;
        while(position){
            currentNode = currentNode.next;
            position -= 1;
        }
        return currentNode;
    }
    set(position, value){
        let foundNode = this.get(position)
        if(foundNode){
            foundNode.val = value;
            return true;
        } else {
            return false;
        }
    }
    insert(position, value){
        if(position > this.length || position < 0) return false;
        if(position === 0 || position === this.length){
            !position ? this.unshift(value) : this.push(value);
            return true;
        }
        let newNode = new Node(value);
        let previousNode = this.get(position-1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length += 1;
        return true;
    }
    remove(position){
        if(position < 0 || position >= this.length){
            return undefined;
        }
        if(position === 0 || position === this.length - 1){
            return !position ? this.shift() : this.pop();
        }
        let previousNode = this.get(position-1);
        let removedNode = previousNode.next;
        previousNode.next = removedNode.next;
        this.length -= 1;
        return removedNode;
    }
    reverse(){
        let previousNode = null;
        let currentNode = this.head;
        while(currentNode !== null){
            let nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;

        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
    }
}

const list = new SinglyLinkedList();
list.push("test");
list.push('wait');
list.unshift("please");
list.insert(3,77);

console.log(list.set(5, "dont wait"));
list.reverse();
console.log(list);


module.exports = {
    Node,
    SinglyLinkedList
}