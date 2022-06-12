def three_sum(array,target_sum):
    triplets = []

    for i in range(len(array)-2):
        left = i+1
        right = len(array) - 1
        while left < right:
            if array[i] + array[left] + array[right] == target_sum:
                triplets.append([array[i],array[left],array[right]])
                right -= 1
                left += 1
            elif array[i] + array[left] + array[right] < target_sum:
                left += 1
            else:
                right -= 1

    return triplets

def four_sum(array,target_sum):
    array.sort()
    quadruplets = []

    for i in range(len(array)-3):
        new_target = target_sum - array[i]
        for triplet in three_sum(array[i+1:],new_target):
            triplet.append(array[i])
            quadruplets.append(triplet)


    return quadruplets

array = [7,3,1,6,-1,2,8,0,-3]
num = 10

print(four_sum(array,num))

from itertools import combinations

def four_sum_two(array,target):
    quadruplets = []
    for quadruplet in list(combinations(array,4)):
        if sum(quadruplet) == target:
            quadruplets.append(quadruplet)
    return quadruplets

print(four_sum_two(array,num))