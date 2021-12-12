// Search in Rotated Array: Given a sorted array of n integers that has been rotated an unknown
// number of times, write code to find an element in the array. You may assume that the array was
// originally sorted in increasing order.
// EXAMPLE
// Input:find 5 in{15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14}
// Output: 8 (the index of 5 in the array)

function searchInRotatedArray (arr, value) {
    let start = 0

    while (start+1 < arr.length && arr[start] < arr[start+1])
        start++

    if (arr[0] <= value && value <= arr[start])
        return binarySearch(arr, value, 0, start)

    if (arr[start+1] <= value && value <= arr[arr.length-1])
        return binarySearch(arr, value, start+1, arr.length-1)
}

function binarySearch (arr, value, left, right) {
    if (left > right)
        return -1

    const middle = Math.floor((left+right) / 2)

    if (arr[middle] < value)
        return binarySearch(arr, value, middle+1, right)

    if (arr[middle] > value)
        return binarySearch(arr, value, left, middle-1)

    return middle
}

const input = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
console.log(searchInRotatedArray(input, 5))