/* 
Root - top node of tree
Child directly connected to another node moving away
Parent - converse of child
Siblings - group of nodes w/ same parent
Leaf - terminal node
Edge - connection b/w nodes
*/

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true){
                if(value === currentNode.value) return undefined;
                if(value > currentNode.value){
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        break;
                    }
                    currentNode = currentNode.right;
                } else {
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        break;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
        return this;
    }
    find(value){
        let currentNode = this.root;
        while(currentNode){
            if(value === currentNode.value){
                return currentNode;
            } else if (value > currentNode.value){
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }
        return false;
    }
    breadthFirstSearch(){
        const queue = [];
        const visited =[];
        queue.push(this.root);
        while(queue.length){
            let currentNode = queue.shift();
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            visited.push(currentNode.value);
        }
        return visited;
    }
    dfsPreOrder(){
        const visited = [];
        const traverse = (node) => {
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
    dfsPostOrder(){
        const visited = [];
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value);
        }

        traverse(this.root);
        return visited;
    }
    dfsInOrder(){
        const visited = [];
        const traverse = (node) => {
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
}

// [7,6,15,9,17,12,13]

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(15);
tree.insert(20);
console.log(tree);
console.log(tree.find(7));
console.log(tree.find(15));
console.log(tree.find(5));
console.log(tree.find(11));
console.log(tree.find(6));
console.log(tree.breadthFirstSearch()); // [10,6,15,3,8,20]
console.log(tree.dfsPreOrder()); // [10,6,3,8,15,20]
console.log(tree.dfsPostOrder()); // [3,8,6,20,15,10]
console.log(tree.dfsInOrder()); // [3,6,8,10,15,20]
