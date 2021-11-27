// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

/**
 * a b c d      m i e a
 * e f g h  =>  n j f b
 * i j k l  =>  o k g c
 * m n o p      p l h d
 */

// O(n²) time | O(n) space
function rotateMatrix(matrix) {
    // [0, 0] => [0, 3]
    // [0, 1] => [1, 3]
    // [0, 2] => [2, 3]
    // [0, 3] => [3, 3]
    // [1, 0] => [0, 2]
    // [1, 1] => [1, 2]
    // [1, 2] => [2, 2]
    // [1, 3] => [3, 2]
    // [2, 0] => [0, 1]
    // [2, 1] => [1, 1]
    // [2, 2] => [2, 1]
    // [2, 3] => [3, 1]
    // [3, 0] => [0, 0]
    // [3, 1] => [1, 0]
    // [3, 2] => [2, 0]
    // [3, 3] => [3, 0]
    const newMatrix = []
    for(let i = 0; i < matrix.length; i++)
        newMatrix.push([])
    
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix.length; column++) {
            newMatrix[column][matrix.length - 1 - row] = matrix[row][column]
        }
    }

    return newMatrix
}

const matrix = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p'],
]

console.log(rotateMatrix(matrix))

function rotateMatrixInPlace(matrix) {

}

const matrix2 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p'],
]

console.log(rotateMatrixInPlace(matrix))