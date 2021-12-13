// Diving Board: You are building a diving board by placing a bunch of planks of wood end-to-end.
// There are two types of planks, one of length shorter and one of length longer. You must use
// exactly K planks of wood. Write a method to generate all possible lengths for the diving board.

function divingBoard (k, shorter, longer) {
    const lengths = new Set()

    getAllLengths(k, 0, shorter, longer, lengths)

    return lengths
}

/**
 * 
 * @param {Number} k 
 * @param {Number} shorter 
 * @param {Number} longer 
 * @param {Set} lengths 
 */
function getAllLengths (k, total, shorter, longer, lengths) {
    if (k === 0) {
        lengths.add(total)
        return
    }

    getAllLengths(k-1, total+shorter, shorter, longer, lengths)
    getAllLengths(k-1, total+longer, shorter, longer, lengths)
}

console.log(divingBoard(5, 3, 2))