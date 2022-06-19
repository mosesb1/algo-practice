class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key= lambda x: x[0])
        res = []
        start,end = intervals[0][0], intervals[0][1]
        for i in range(1,len(intervals)):
            if intervals[i][0] <= end:
                end = max(intervals[i][1],end)
            else:
                res.append([start,end])
                start,end = intervals[i][0], intervals[i][1]
        res.append([start,end])
        return res
