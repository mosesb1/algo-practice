var maxArea = function(height) {
    let left = 0, right = height.length-1;
    let maxVol = 0;
    while(left < right){
        let containerHeight = Math.min(height[left],height[right]);
        let currVol = (right-left)*containerHeight;
        maxVol = Math.max(maxVol, currVol);
        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }
    return maxVol;
};