// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

const topKFrequent = (nums,k) => {
    const map = {};
    for(let i = 0; i < nums.length; i++){
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }
    const buckets = new Array(nums.length);
    for(let key in map){
        if(buckets[map[key]]){
            buckets[map[key]].push(key)
        } else {
            buckets[map[key]] = [key]
        }
    }
    const output = [];
    for(let i = buckets.length-1; i >= 0; i--){
        if(buckets[i]){
            buckets[i].forEach(num => {
                output.push(num)
            })
        }
        if(output.length === k) break;
    }
    return output
}