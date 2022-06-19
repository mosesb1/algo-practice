class Solution:
    def climbStairs(self, n: int) -> int:
        def rec(n, memo={1: 1, 2: 2}):
            try:
                return memo[n]
            except KeyError:
                res = rec(n-1) + rec(n-2)
                memo[n] = res
                return res
        
        return rec(n)