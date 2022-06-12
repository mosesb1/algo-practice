const arr1 = [2,55,70]
const arr2 = [1,20,60,85]

const merge = (arr1,arr2) => {
    const sortedArr = []
    let i = 0, j = 0;
    while(i < arr1.length || j < arr2.length){
        if(i >= arr1.length){
            sortedArr.push(arr2[j])
            j += 1
        } else if(j >= arr2.length){
            sortedArr.push(arr1[i])
            i += 1
        } else {
            if(arr1[i] < arr2[j]){
                sortedArr.push(arr1[i])
                i += 1
            } else {
                sortedArr.push(arr2[j])
                j += 1
            }
        }
    }
    return sortedArr
}


const mergeSort = (arr) => {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid));
    return merge(left,right)
}

const pivot = (arr, start = 0, end = arr.length) => {
    let pivot = arr[start]
    let leftSwaps = start
    for(let i = start; i < end; i++){
        if(arr[i] < pivot){
            leftSwaps += 1;
            [arr[i],arr[leftSwaps]] = [arr[leftSwaps], arr[i]]
        }
    }
    [arr[start], arr[leftSwaps]] = [arr[leftSwaps], arr[start]]
    return leftSwaps
}

const quickSort = (arr, left = 0, right = arr.length) => {
    if(left < right) {
        let pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx-1)
        quickSort(arr, pivotIdx+1, right)
    }
    return arr
}

const getDigit = (num, place) => {
    return Math.floor(Math.abs(num)/Math.pow(10,place))%10
}

const digitCount = (num) => {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))+1)
}

const maxDigits = (arr) => {
    return arr.reduce((acc, item) => {
        let digits = digitCount(item)
        return acc = digits > acc ? digits : acc
    },0)
}

const radixSort = (arr) => {
    let digits = maxDigits(arr);
    for(let i = 0; i < digits; i++){
        const buckets = [[],[],[],[],[],[],[],[],[],[]]
        for(let j = 0; j < arr.length; j++){
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j])
        }
        arr = buckets.flat()
    }
    return arr
}




const arr = [8157,9637,4,902,7,408,1556,593,29,4386,86,3556]

console.log(radixSort(arr))