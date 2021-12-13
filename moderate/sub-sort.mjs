// Sub Sort: Given an array of integers, write a method to find indices m and n such that if you sorted
// elements m through n , the entire array would be sorted. Minimize n - m (that is, find the smallest
// such sequence).
// EXAMPLE
// Input: 1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19
// Output: (3, 9)

/**
 * THIS SOLUTION IS WRONG!!!
 */
function subSort (arr) {
    let left = 0
    let right = arr.length-1

    while (left < right) {
        if (arr[left] <= arr[left+1])
            left++

        if (arr[right] >= arr[right-1])
            right--

        if (arr[left] > arr[left+1] || arr[right] < arr[right-1])
            break
    }

    console.log(left, right)
}

subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])