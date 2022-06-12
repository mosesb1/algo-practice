// Given an integer array nums, return true if any value appears at least 
// twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums) => {
    const found = {};
    for(let i = 0; i < nums.length; i++){
        if(!found[nums[i]]){
            found[nums[i]] = true;
        } else {
            return true
        }
    } 
    return false
}