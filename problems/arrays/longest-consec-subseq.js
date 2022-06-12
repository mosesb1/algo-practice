var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxSeq = 0;
    
    for(let num of nums){
        if(!set.has(num-1)){
            let length = 0;
            while(set.has(num+length)){
                length++;
            }
            maxSeq = Math.max(length, maxSeq);
        }
    }
    return maxSeq
};

// var longestConsecutive = function(nums) {
//     const hashMap = {};
//     const seqStarts = [];
//     let maxSeq = 0;
//     for(let i = 0; i < nums.length; i++){
//         hashMap[nums[i]] = true;
//     }
//     for(let key in hashMap){
//         if(!hashMap[key-1]){
//             seqStarts.push(parseInt(key));
//         }
//     }
//     for(let i = 0; i < seqStarts.length; i++){
//         let tempSeq = 1, tempNum = seqStarts[i];
//         while(true){
//             if(hashMap[tempNum+1]){
//                 tempSeq++;
//                 tempNum++;
//             } else {
//                 if(tempSeq > maxSeq){
//                     maxSeq = tempSeq
//                 }
//                 break;
//             }
//         }
//     }
//     return maxSeq
// };

const nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums))