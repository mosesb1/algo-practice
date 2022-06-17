const isValidIdx = (grid, i, j) => {
    return !(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length);
}
const traverseIsland = (grid, islands, i, j) => {
    if(grid[i][j] !== "1" || islands[[i,j]] === true) return;
    islands[[i,j]] = true;
    const steps = [
        [1,0],
        [0,1],
        [-1,0],
        [0,-1]
    ]
    for(let [x,y] of steps){
        let newI = i + x;
        let newJ = j + y;
        if(isValidIdx(grid,newI,newJ)){
            traverseIsland(grid,islands,newI,newJ);    
        }
    }
}

var numIslands = function(grid) {
    const islands = {};
    let counter = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === "1" && islands[[i,j]] === undefined){
                counter++;
                traverseIsland(grid, islands,i, j);
            }
        }
    }
    return counter;
};