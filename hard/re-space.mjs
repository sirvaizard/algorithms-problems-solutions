// Re-Space: Oh, no! You have accidentally removed all spaces, punctuation, and capitalization in a
// lengthy document. A sentence like "I reset the c omputer. It still didn't boot!"
// became "iresetthec omputeri tstilldidntboot''. You'll deal with the punctuation and capi­
// talization later; right now you need to re-insert the spaces. Most of the words are in a dictionary but
// a few are not. Given a dictionary (a list of strings) and the document (a string), design an algorithm
// to unconcatenate the document in a way that minimizes the number of unrecognized characters.
// EXAMPLE
// Input: jesslookedjustliketimherbrother
// Output: jess looked just like tim her brother (7 unrecognized characters)

//THIS SOLUTION IS WRONG!!!!

const input = 'jesslookedjustliketimherbrother'
const dict = ['looked', 'just', 'like', 'her', 'brother']

function reSpace (input, dict) {
    for (const word of dict) {
        input = input.split(word).join(` ${word} `)
    }

    console.log(input.replaceAll(/\s{2,}/g, ' '))
}

reSpace(input, dict)