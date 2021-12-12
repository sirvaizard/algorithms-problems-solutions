function binarySearch (arr, value) {
    return _binarySearch (arr, value, 0, arr.length-1)
}

function _binarySearch (arr, value, left, right) {
    if (left > right)
        return -1

    const middle = Math.floor((left + right) / 2)

    if (arr[middle] < value)
        return _binarySearch(arr, value, middle+1, right)
    if (arr[middle] > value)
        return _binarySearch(arr, value, left, middle-1)

    return middle
}


const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(binarySearch(arr, 5))