// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

const isAnagram = (s,t) => {
    if(s.length !== t.length) return false;

    const chars = {};
    for(let i = 0; i < s.length; i++){
        letters[s[i]] = (letters[s[i]] || 0) + 1;
    }
    for(let i = 0; i < t.length; i++){
        if(!letters[t[i]]) return false;
        letters[t[i]] -= 1;
    }
    return true
}