var threeSum = function(nums) {
    const triplets = [];
    const visited = {};
    nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length-2;i++){
        if(!visited[nums[i]]){
           let left = i+1, right = nums.length-1;
            while(left < right){
                if(nums[i] + nums[left] + nums[right] === 0){
                    triplets.push([nums[i],nums[left],nums[right]])
                    let currentLeft = nums[left]
                    while(nums[left] === currentLeft){
                        left++;
                    }
                    right--;
                } else if (nums[i] + nums[left] + nums[right] < 0){
                    left++;
                } else {
                    right--;
                }
            } 
            visited[nums[i]] = true
        }

    }
    
    return triplets
};

// var threeSum = function(nums) {
//     const triplets = [];
//     nums.sort((a,b) => a-b);
//     for(let i = 0; i < nums.length-2;i++){
//         if(i === 0 || nums[i] !== nums[i-1]){
//            let left = i+1, right = nums.length-1;
//             while(left < right){
//                 if(nums[i] + nums[left] + nums[right] === 0){
//                     triplets.push([nums[i],nums[left],nums[right]])
//                     let currentLeft = nums[left]
//                     while(nums[left] === currentLeft){
//                         left++;
//                     }
//                     right--;
//                 } else if (nums[i] + nums[left] + nums[right] < 0){
//                     left++;
//                 } else {
//                     right--;
//                 }
//             } 
//         }

//     }
    
//     return triplets
// };