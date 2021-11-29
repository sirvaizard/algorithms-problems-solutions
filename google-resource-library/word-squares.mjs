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

const input = ['BALL', 'AREA', 'LEAD', 'LADY']

// O(k²) time
function isSquareWord (words, k) {
    for (let i = 0; i < k; i++)
        for (let j = 0; j < k; j++)
            if (words[j][i] !== words[i][j])
                return false
    return true
}

function wordSquares (words, k) {
    
}

console.log(isSquareWord(input, 4))