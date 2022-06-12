class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    hash(key){
        let total = 0;
        let weirdPrime = 31;
        for(let i = 0; i < Math.min(key.length,100); i++){
            total = (total * weirdPrime + key.charCodeAt(i) - 96)%this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        let hash = this.hash(key);
        if(!this.keyMap[hash]){
            this.keyMap[hash] = [[key, value]];
        } else {
            this.keyMap[hash].push([key,value])
        }
    }
    get(key){
        let hash = this.hash(key);
        if(this.keyMap[hash]){
            for(let i = 0; i < this.keyMap[hash].length; i++){
                if(this.keyMap[hash][i][0] === key){
                    return this.keyMap[hash][i][1];
                }
            }
        }
        return undefined;
    }
    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

const hashTable = new HashTable;
hashTable.set("cyan", "#000000")
hashTable.set('darkgreen', '#111111');
hashTable.set('darkred', '#111111')
console.log(hashTable.values());
console.log(hashTable.keys());