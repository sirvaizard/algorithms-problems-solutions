// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.

/**
 * Ask: should I assume that both string have the same length?
 * Ask: is permutation case sentitive?
 * Ask: are whitespaces significant?
 */

// O(n) time | O(n) space
function checkPermutation (str1, str2) {
    if (str1.length !== str1.length)
        return false

    const lettersCount = new Map()
    for (const letter of str2) {
        if (lettersCount.has(letter))
            lettersCount.set(letter, lettersCount.get(letter) + 1)
        else
            lettersCount.set(letter, 1)
    }

    for (const letter of str1) {
        const count = lettersCount.get(letter)

        // that includes when the letter does not exists in the map and when the count is zero
        if (!count)
            return false
        else
            lettersCount.set(letter, count - 1)
    }

    return true
}

console.log(checkPermutation('asdce', 'hgfh'))
console.log(checkPermutation('asdce', 'edacs'))

// Order both arrays

// Letter counting are the same