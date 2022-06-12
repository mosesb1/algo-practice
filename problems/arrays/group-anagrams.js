// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

const groupAnagrams = (strs) => {
    const result = {};
    const map = {};
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < letters.length; i++){
        map[letters[i]] = i;
    }
    for(let i = 0; i < strs.length; i++){
        const key = new Array(26);
        key.fill(0);
        for(let j = 0; j < strs[i].length; j++){
            key[map[strs[i][j]]] += 1;
        }
        if(!result[key]){
            result[key] = [strs[i]]
        } else {
            result[key].push(strs[i])
        }
    }
    return Object.values(result)
}