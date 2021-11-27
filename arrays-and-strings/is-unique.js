// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

/**
 * Ask if is ASCII or Unicode (for size). Does it matter in JS? NO!
 * Ask how many characters are possible. So anything with length greater than that should return false
 */

// O(n) time | O(n) space
function isUnique(str) {
    const characters = new Set()

    for (const char of str) {
        if (characters.has(char))
            return false
        else
            characters.add(char)
    }

    return true
}

console.log(isUnique('abcd'))
console.log(isUnique('abcb'))

// Without data structures
// O(n²) time | O(1) space
function isUniqueWithoutDataStructures(str) {
    for (let index = 0; index < str.length; index++)
        for (let curr = index+1; curr < str.length; curr++)
            if(str[index] === str[curr])
                return false
    return true
}

console.log(isUniqueWithoutDataStructures('abcd'))
console.log(isUniqueWithoutDataStructures('abcb'))

// Sort array and check neighbours