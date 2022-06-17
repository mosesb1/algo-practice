var combinationSum = function(candidates, target) {
    const res = [];
    
    function dfs(i,curr,total){
        if(total === target) {
            res.push([...curr]);
            return;
        }
        if(total > target || i >= candidates.length){
            return
        }
        curr.push(candidates[i])
        dfs(i,curr,total+candidates[i])
        curr.pop()
        dfs(i+1,curr,total)
    }
    dfs(0,[],0)
    return res
};