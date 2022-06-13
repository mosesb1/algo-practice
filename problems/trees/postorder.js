var postorderTraversal = function(root) {
    const result = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        result.push(node.val);
    }
    if(root) traverse(root);
    return result;
};