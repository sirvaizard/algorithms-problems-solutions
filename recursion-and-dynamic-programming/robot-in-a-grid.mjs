// Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
// The robot can only move in two directions, right and down, but certain cells are "off limits" such that
// the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
// the bottom right.

/**
 * 21:48 21:54
 */

const grid = [
    [true, true, true,true,true],
    [true, true, true,true,true],
    [true, true, true,true,true],
    [true, true, true,true,true],
    [true, true, true,true,true]
]

const steps = []

function isOffLimitCell(x, y) {
    if (x >= grid[0].length || x < 0 || y >= grid.length || y < 0)
        return true
    return !grid[x][y]
}

/**
 * O(n) time | O(r + c) space (without couting the array with steps)
 */

const failedCells = new Set()

function robotInAGrid (x, y) {
    if (isOffLimitCell(x, y))
        return false
    if (x === grid[0].length - 1 && y === grid.length - 1)
        return true

    steps.push('right')
    if (!failedCells.has(`${x+1}|${y}`) && robotInAGrid(x+1, y))
        return true
    steps.pop()

    steps.push('down')
    if (!failedCells.has(`${x}|${y+1}`) && robotInAGrid(x, y+1))
        return true
    steps.pop()
    failedCells.add(`${x}|${y}`)
    return false
}

console.log(robotInAGrid(0, 0))
console.log(steps)