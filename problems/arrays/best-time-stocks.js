var maxProfit = function(prices) {
    let left = 0, right = left + 1, max = -Infinity;
    while(right < prices.length){
        let currProfit = prices[right] - prices[left];
        max = Math.max(currProfit,max);
        if(currProfit < 0){
            left++;
            right = left + 1;
        } else {
            right++;
        }
    }
    return Math.max(max,0)
};