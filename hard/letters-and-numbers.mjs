// Letters and Numbers: Given an array filled with letters and numbers, find the longest subarray with
// an equal number of letters and numbers.

const example = ['A', 'B', 'A', 'A', 'A', 'B', 'B', 'B', 'A', 'B', 'A', 'A', 'B', 'B', 'A', 'A', 'A', 'A', 'A', 'A']

function lettersAndNumbers (arr) {
    const subLetters = new Map()
    const subNumbers = new Map()

    let start = 0
    let count = 0
    let max = 0
    let curr = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === curr) {
            count++
        } else {
            if (isNumber(arr[i-1])) {
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
            curr = arr[i]
        }
    }

    return [subLetters.get(max), subNumbers.get(max)]
}

function isNumber (value) {
    return value === 'A'
}

console.log(lettersAndNumbers(example))