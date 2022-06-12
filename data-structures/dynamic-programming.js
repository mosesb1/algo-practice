/* 
    Overlapping Subproblems 
If problem can be broken down into subproblems which are reused several times

    Optimal Substructure
Optimal solution can be constructed from optimal solutions for subproblems
*/

function fibonacci(n, memo={1: 1, 2: 1}){
    if(memo[n]) return memo[n];
    let res = fibonacci(n-1, memo) + fibonacci(n-2,memo);
    memo[n] = res;
    return res;
}

function fibBottomUp(n){
    if(n <= 2) return 1;
    const fibNums = [0,1,1];
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

console.log(fibonacci(10));
console.log(fibBottomUp(1000));