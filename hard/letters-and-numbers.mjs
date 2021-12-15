// Letters and Numbers: Given an array filled with letters and numbers, find the longest subarray with
// an equal number of letters and numbers.

const example = ['A', 8, 'g', 'q', 'T', 2, 1, 7, 'B', 9, 'q', 't', 10, 21, 'Z', 'i', 'u', 'g', 'n', 'd']

function lettersAndNumbers (arr) {
    const subLetters = new Map()
    const subNumbers = new Map()

    let start = 0
    let count = 0
    let max = 0
    let isNumber = Number.isInteger(arr[0])
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) === isNumber) {
            count++
        } else {
            if (Number.isInteger(arr[i-1])) {
                subNumbers.set(count, [start, i-1])
                if (subLetters.has(count) && count > max) {
                    max = count
                }
            } else {
                subLetters.set(count, [start, i-1])
                if (subNumbers.has(count) && count > max) {
                    max = count
                }
            }
            count = 1
            start = i
            isNumber = Number.isInteger(arr[i])
        }
    }

    return [subLetters.get(max), subNumbers.get(max)]
}

console.log(lettersAndNumbers(example))