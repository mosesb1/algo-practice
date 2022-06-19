class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1: return nums[0]
        rob1, rob2 = 0,0
        rob3, rob4 = 0,0
        for i in range(0,len(nums)-1):
            temp = max(rob1 + nums[i], rob2)
            rob1 = rob2
            rob2 = temp
        for i in range(1,len(nums)):
            temp = max(rob3 + nums[i], rob4)
            rob3 = rob4
            rob4 = temp
        return max(rob2,rob4)