def bubble_sort(array):
    is_sorted = False
    while not is_sorted:
        is_sorted = True
        for i in range(len(array)-1):
            if array[i] > array[i+1]:
                array[i],array[i+1] = array[i+1],array[i]
                is_sorted = False

    return array

array = [8,7,6,5,4,3,2,1]
print(bubble_sort(array))