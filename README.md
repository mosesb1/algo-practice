# Algorithm Practice - Solution Explanations and General Tricks

# Array Problems

## General Methods

### Sliding Window

### Buckets

### Multiple pointers

### Left and right pass

### Track max and min

### Hash maps
Store the frequency of an element or a boolean to signify that the element is in the array. 

### Use a set

### Sort
## Sample problems

### 1. Two Sum
- Use hash map to store index of each value as you encounter them
- if the target - current value is already stored, return the indexes of both
Optimal Solution: O(n) ST
### 49. Group Anagrams
- create a mapping of each letter to a number from 0 to 25
- for each string in array, create an array of length 26, each index corresponding to the letter mapped above, and store the counts in those indexes.
- use the above array as a key in a results dictionary, each key should map to an array which will contain anagrams
- return the values of the results dictionary 
Optimal Solution: O(n) ST
### 347. Top K Frequent Elements
- create a hash map to map the frequency of each element.
- create a an array of "buckets" which will be the length of the input array
- the index in the buckets array will correspond to each element, use the hash map to push the elements into the bucket array as nested arrays
- traverse the buckets array from right to left, adding each element from the nested array to an output array before moving on
Optimal Solution O(n) ST
### 242. Valid Anagram
- return false if the strings are not equal in length
- store the frequency of each character in one of the strings in a hash map
- traverse the second string, decreasing the count of that letter by one in the hash map
- return false if the letter does not exist as a key in the hash map or if the frequency is 0 before decrementing
Optimal Solution O(n) ST

### 217. Contains Duplicate

Optimal Solution: O(n) ST

### 238. Product of Array Except Self

Optimal Solution: O(n) ST

### 36. Valid Sudoku

Optimal Solution: O(1) ST

### 128. Longest Consecutive Subsequence

### 94. Binary Tree Inorder Traversal

### 144. Binary Tree Preorder Traversal

### 145. Binary Tree Postorder Traversal

### 20. Valid Parenthesis

### 125. Valid Palindrome

### 167. Two Sum II - Input Array is Sorted

### 15. 3sum

### 5. Longest Palindromic Substring

### 11. Container with most water

### 121. Best Time to Buy and Sell Stock

### 200. Number of Islands

### 118. Pascal's Triangle

### 39. Combination Sum

### 417. Pacific Atlantic Water Flow

### 207. Course Schedule

### 70. Climbing Stairs

### 198. House Robber

### 213. House Robber II

### 647. Palindromic Substrings

### 56. Merge Intervals