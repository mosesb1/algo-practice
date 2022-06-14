var isPalindrome = function(s) {
    let left = 0, right = s.length-1;
    let letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    while(left < right){
        if(!letters.includes(s[left].toLowerCase()) || !letters.includes(s[right].toLowerCase())){
            if(!letters.includes(s[left].toLowerCase())){
                left++;
            }
            if(!letters.includes(s[right].toLowerCase())){
                right--;
            }
        } else {
            if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
    }
    return true;
};