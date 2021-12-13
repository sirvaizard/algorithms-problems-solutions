// Pond Sizes: You have an integer matrix representing a plot of land, where the value at that location
// represents the height above sea level. A value of zero indicates water. A pond is a region of water
// connected vertically, horizontally, or diagonally. The size of the pond is the total number of
// connected water cells. Write a method to compute the sizes of all ponds in the matrix.

function poundSizes (land) {
    const visited = new Set()
    const pounds = []

    for (let row = 0; row < land.length; row++) {
        for (let column = 0; column < land[row].length; column++) {
            if (land[row][column] === 0 && !visited.has(`${row}|${column}`))
                pounds.push(getPoundsSizes (land, row, column, visited, pounds))
        }
    }

    return pounds
}

function isValid (land, x, y) {
    return !(x < 0 || x >= land.length || y < 0 || y >= land[0].length)
}

function getSteps (x, y) {
    const steps = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1]
    ]

    return steps.map(([offsetX, offsetY]) => [x + offsetX, y +offsetY])
}

function getPoundsSizes (land, row, column, visited, pounds) {
    if (land[row][column] !== 0)
        return 0

    let length = 1
    for (const [newRow, newColumn] of getSteps(row, column)) {
        if (!visited.has(`${newRow}|${newColumn}`) && isValid(land, newRow, newColumn)) {
            visited.add(`${row}|${column}`)
            length += getPoundsSizes(land, newRow, newColumn, visited, pounds)
        }
    }

    return length
}

const input = [
    [0, 2, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1]
]

console.log(poundSizes(input))