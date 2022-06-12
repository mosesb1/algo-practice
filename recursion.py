# RECURSION PRACTICE

def reverse_string(string):
    # What is the base case?
    if not string:
        return ''
    # What is the smallest amount of work in each iteration?
    return reverse_string(string[1:]) + string[0]

string = 'hello'
print(reverse_string(string))

def is_palindrome(string):
    if len(string) == 0 or len(string) == 1:
        return True
    if string[0] == string[len(string)-1]:
        return is_palindrome(string[1:len(string)-1])
    return False

palindrome = 'racecar'
print(is_palindrome(palindrome))

def decimal_to_binary(decimal,result = ''):
    if decimal == 0:
        return result
    result = str(decimal % 2) + result
    return decimal_to_binary(decimal//2,result)

num = 1023
print(decimal_to_binary(num))

def sum_natural_nums(n):
    if n <= 1:
        return n
    return n + sum_natural_nums(n-1)

n = 15
print(sum_natural_nums(n))

# binary search - MUST BE SORTED

def binary_search(array,left,right,num):
    if left > right:
        return -1
    mid = (left + right)//2
    if num == array[mid]:
        return mid
    elif num < array[mid]:
        return binary_search(array,left, mid-1,num)
    else:
        return binary_search(array,mid+1,right,num)
    
array = [1,2,3,4,5,6,7,8,9]

print(binary_search(array,0,len(array)-1,3))

def fibonacci(n):
    if n == 1 or n == 0:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

n = 20
print(fibonacci(n))

# merge sort

def merge(array,left,right):
    i = j = k = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            array[k] = left[i]
            i += 1
        else:
            array[k] = right[j]
            j += 1
        k += 1
    while i < len(left):
        array[k] = left[i]
        i += 1
        k += 1
    while j < len(right):
        array[k] = right[j]
        j += 1
        k += 1

def merge_sort(array):
    if len(array) > 1:
        mid = len(array)//2
        left = array[:mid]
        right = array[mid:]
        merge_sort(left)
        merge_sort(right)
        merge(array,left,right)

        

arr = [-5,20,10,3,2,0]
merge_sort(arr)
print(arr)

#reverse linked list

def reverse_linked_list(head,previous = None):
    if head == None:
        return previous
    next_node = head.next
    head.next = previous
    previous = head
    head = next_node
    return reverse_linked_list(head,previous)
