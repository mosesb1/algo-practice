// Given an integer array nums, return an array answer such that answer[i] is equal 
// to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

const productExceptSelf = (nums) => {
    let leftProduct = 1, rightProduct = 1;
    const products = new Array(nums.length);
    products.fill(1);
    for(let i = 0; i < nums.length; i++){
        products[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    for(let i = nums.length-1; i >= 0; i--){
        products[i] *= rightProduct;
        rightProduct *= nums[i]
    }
    return products
}