var pacificAtlantic = function(heights) {
    const res = [];
    const pacVisited = {};
    const atlVisited = {};
    function isValidIdx(i,j){
        return i >= 0 && j >= 0 && i < heights.length && j < heights[0].length
    }
    function dfs(i,j, visited, prev){
        if(visited[[i,j]] || !isValidIdx(i,j) || heights[i][j] < prev){
            return
        }
        visited[[i,j]] = [i,j]
        dfs(i+1,j,visited,heights[i][j])
        dfs(i,j+1,visited,heights[i][j])
        dfs(i-1,j,visited,heights[i][j])
        dfs(i,j-1,visited,heights[i][j])
        
    }
    for(let i = 0; i < heights[0].length; i++){
        dfs(0,i, pacVisited,heights[0][i])
        dfs(heights.length-1,i,atlVisited, heights[heights.length-1][i])
    }
    for(let i = 0; i < heights.length; i++){
        dfs(i,0, pacVisited,heights[i][0])
        dfs(i,heights[0].length-1, atlVisited,heights[i][heights[0].length-1])
    }
    for(let key1 in pacVisited){
        if(atlVisited[key1]){
            res.push(pacVisited[key1])
        }
    }
    return res
};