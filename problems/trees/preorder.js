var preorderTraversal = function(root) {
    const result = [];
    if(!root) return [];
    function traverse(node){
        result.push(node.val);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return result;
};