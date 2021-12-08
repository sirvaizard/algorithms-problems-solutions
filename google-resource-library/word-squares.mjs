// A “word square” is an ordered sequence of K different words of length K that,
// when written one word per line, reads the same horizontally and vertically.
// For example:
// BALL
// AREA
// LEAD
// LADY
// First, design a way to return true if a given sequence of words is a word square.

// Second, given an arbitrary list of words, return all the possible word squares it contains. Reordering is allowed.

// For example, the input list

// [AREA, BALL, DEAR, LADY, LEAD, YARD]

// should output

// [(BALL, AREA, LEAD, LADY), (LADY, AREA, DEAR, YARD)]

// Finishing the first task should help you accomplish the second task.

const input = ['AREA', 'BALL', 'DEAR', 'LADY', 'LEAD', 'YARD']

// O(k²) time
function isSquareWord (words, k) {
    for (let i = 0; i < k; i++)
        for (let j = 0; j < k; j++)
            if (words[j][i] !== words[i][j])
                return false
    return true
}

function insertAt (array, item, index) {
    return [...array.slice(0, index), item, ...array.slice(index)]
}


function getWordsPermutations (words, k) {
    if (words === null)
        return null

    const permutations = []

    if (words.length === 0) {
        permutations.push([])
        return permutations
    }

    const head = words[0]
    const tail = words.slice(1)
    
    const p = getWordsPermutations(tail, k)

    for (const perm of p) {
        for (let index = 0; index <= perm.length; index++) {
            const c = insertAt(perm, head, index)
            permutations.push(c)
        }
    }

    return permutations
}

function wordSquares (words, k) {
    const permutations = []

    for (let start = 0; start + k <= words.length; start++) {
        permutations.push(...getWordsPermutations(words.slice(start, start+k)))
    }

    const wordSquares = []
    for (const permutation of permutations) {
        console.log(permutation)
        if (isSquareWord(permutation, k))
            wordSquares.push(permutation)
    }

    return wordSquares
}

console.log(wordSquares(input, 4))
// console.log(getWordsPermutations(input, 4))