class Solution:
    def countSubstrings(self, s: str) -> int:
        counter = 0
        for i in range(len(s)):
            left, right = i,i
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
                counter += 1
            left,right = i,i+1
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
                counter += 1
        return counter