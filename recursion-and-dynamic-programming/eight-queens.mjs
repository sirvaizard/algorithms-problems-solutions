// Eight Queens:Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board
// so that none of them share the same row, column, or diagonal. In this case, "diagonal" means all
// diagonals, not just the two that bisect the board.

/**
 * Ask: Can I choose the start position of the queens arbitrarily?
 */

const valid = [5, 1, 6, 0, 3, 7, 4, 2]

const BOARD_SIZE = 8

function eightQueen (queens=[0,0,0,0,0,0,0,0], index=0) {
    if (index === BOARD_SIZE)
        return false

    if (isValidState(queens))
        console.log(queens)

    for (let row = 0; row < BOARD_SIZE; row++) {
        const newBoard = [...queens]
        newBoard[index] = row
        eightQueen(newBoard, index+1)
    }

    return false
}

function isValidState (queens) {
    // O(1)
    for (const [currentRow, currentCol] of Object.entries(queens)) {
        for (const [otherRow, otherCol] of Object.entries(queens)) {
            if (currentRow === otherRow)
                continue
            // check diagonals
            if (Math.abs(currentRow - otherRow) === Math.abs(currentCol - otherCol))
                return false
            // check - horizontal
            if (currentCol === otherCol)
                return false
        }
    }

    return true
}

eightQueen()