// Missing Two: You are given an array with all the numbers from 1 to N appearing exactly once,
// except for one number that is missing. How can you find the missing number in O(N) time and
// 0( 1) space? What if there were two numbers missing?

const input = [1,2,3,4,6,7,8,9,10]
const n = 10

function missingTwo (arr, n) {
    const total = n * (n-1) / 2

    const sum = arr.reduce((acc, curr) => acc+curr, 0)

    return sum - total
}

console.log(missingTwo(input, n))