// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0.

// 17:25 17:33
// O(mn) time | O(s) space s = number of rows and columns to zero
function zeroMatrix(matrix) {
    const rowsToZero = new Set()
    const columnsToZero = new Set()

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[0].length; column++) {
            if (matrix[row][column] === 0) {
                rowsToZero.add(row)
                columnsToZero.add(column)
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column <matrix[0].length; column++) {
            if (rowsToZero.has(row) || columnsToZero.has(column))
                matrix[row][column] = 0
        }
    }

    return matrix
}

const matrix = [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]

for (const row of zeroMatrix(matrix))
    console.log(row)