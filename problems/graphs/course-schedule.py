class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adjacency_list = { i: [] for i in range(numCourses)}
        
        for course, prereq in prerequisites:
            adjacency_list[course].append(prereq)
        
        visit_set = set()
        
        def dfs(course):
            if course in visit_set:
                return False
            if adjacency_list[course] == []:
                return True
            
            visit_set.add(course)
            for prereq in adjacency_list[course]:
                if not dfs(prereq): return False
                
            visit_set.remove(course)
            adjacency_list[course] = []
            return True
        
        for course in range(numCourses):
            if not dfs(course):
                return False
        return True