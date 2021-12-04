// Magic Index: A magic index in an array A[ 1 .•. n-1] is defined to be an index such that A[ i]
// i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
// array A.

/**
 * Ask: Can the numbers be negative? 
 * Obs: If cannot be negative numbers and the numbers are sorted and distict,
 *      if the first index isn't magic then none are.
 * Obs: If A[i] > i then none of the following numbers will be
 */

const A = [-1, -2, 1, 2, 4, 9]

// If negative number are not allowed the time complexity will be O(1)
function magicIndexNonNegative (arr) {
    if (arr[0] === 0)
        return 0
    return -1
}

// If negative numbers are allowed
// O(n)
function magicIndex (arr) {
    let index = 0
    while (index < arr.length) {
        if (arr[index] === index)
            return index

        if (arr[index] <= index)
            index++
        else
            index = arr[index]
    }

    return -1
}

function magicIndexBinarySearch (arr) {
    return binarySearch(arr, 0, arr.length-1)
}

// O(log n)
function binarySearch (arr, begin, end) {
    if (end < begin)
        return -1

    const half = Math.floor((begin + end) / 2)
    if (arr[half] === half)
        return half

    if (arr[half] < half)
        return binarySearch(arr, half+1, end)
    else
        return binarySearch(arr, begin, half-1)
}

console.log(magicIndex(A))
console.log(magicIndexBinarySearch(A))