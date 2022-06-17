var longestPalindrome = function(s) {
    let resLen = 0;
    let longestLeft, longestRight;
    for(let i = 0; i < s.length; i++){
        let left = i, right = i;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            if((right - left + 1) > resLen){
                resLen = right - left + 1;
                longestLeft = left;
                longestRight = right;
            }
            left--;
            right++;
        }
        left = i, right = i + 1;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            if((right - left + 1) > resLen){
                resLen = right - left + 1;
                longestLeft = left;
                longestRight = right;
            }
            left--;
            right++;
        }
    }
    return s.slice(longestLeft, longestRight + 1)
};