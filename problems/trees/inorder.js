var inorderTraversal = function(root) {
    const result = [];
    if(!root) return result;
    function traverse(node){
        if(node.left) traverse(node.left);
        result.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    return result;
};