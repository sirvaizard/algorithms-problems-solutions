// Contiguous Sequence: You are given an array of integers (both positive and negative). Find the
// contiguous sequence with the largest sum. Return the sum.
// EXAMPLE
// Input: 2, -8, 3, -2, 4, -10
// Output: 5 ( i. e. , { 3, -2, 4} )

function contiguousSequence (arr) {
    let max = 0
    let sum = 0
    for (const num of arr) {
        sum += num
        if (max < sum)
            max = sum
        else if (sum < 0)
            sum = 0
    }

    return max
}

console.log(contiguousSequence([2, -8, 3, -2, 4, -10]))