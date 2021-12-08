// Permutations without Dups: Write a method to compute all permutations of a
// string of unique characters.

function permutationsWithoutDups (string) {
    if (string === null)
        return null

    const permutations = []

    if (string.length === 0) {
        permutations.push('')
        return permutations
    }

    const char = string.charAt(0)
    const remainder = string.slice(1)

    const words = permutationsWithoutDups(remainder)

    for (const word of words) {
        for (let index = 0; index <= word.length; index++) {
            const s = insertCharAt(word, char, index)
            permutations.push(s)
        }
    }

    return permutations
}


function insertCharAt (string, char, index) {
    const start = string.slice(0, index)
    const end = string.slice(index)

    return start + char + end
}

console.log(permutationsWithoutDups('123'))
