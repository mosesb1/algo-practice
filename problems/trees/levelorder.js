var levelOrder = function(root) {
    const result = [];
    if(!root) return result;
    const queue = [root];
    function traverseLevel(queue, levelLen){
        if(!levelLen) return;
        const levelResult = [];
        let nextLevelLen = 0;
        for(let i = 0; i < levelLen; i++){
            let node = queue.pop();
            levelResult.push(node.val);
            if(node.left){
                queue.unshift(node.left);
                nextLevelLen++;
            }
            if(node.right){
                queue.unshift(node.right);
                nextLevelLen++;
            }
        }
        result.push(levelResult)
        traverseLevel(queue, nextLevelLen);
    }
    traverseLevel(queue,1);
    return result;
};