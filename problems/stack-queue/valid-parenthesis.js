var isValid = function(s) {
    const stack = [];
    const pairs = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    let openBrackets = '({[';
    let closeBrackets = ')}]';
    for(let i = 0; i < s.length; i++){
        if(openBrackets.includes(s[i])){
            stack.push(s[i]);
        } else if (closeBrackets.includes(s[i])){
            if(s[i] === pairs[stack[stack.length-1]]){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length
};