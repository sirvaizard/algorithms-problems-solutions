// Paint Fill: Implement the "paint fill" function that one might see on many image editing programs.
// That is, given a screen (represented by a two-dimensional array of colors), a point, and a new color,
// fill in the surrounding area until the color changes from the original color.

/**    
 *     [3,1]
 *  G G R R R R         G G V V V V
 *  G G G G R R         G G G G V V
 *  R R R R R R   ==>   V V V V V V
 *  R R B B B R         V R V B B V
 *  R B B B R R         V B V B V V
 * 
 *  22:07 22:14
 */

function isOutOfBoundaries (screen, x, y) {
    return x < 0 || x >= screen.length || y < 0 || y >= screen[0].length
}

function getCoords (x, y) {
    const directions =  [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1]
    ]

    const coords = []

    for (const [xOffset, yOffset] of directions)
        coords.push([x+xOffset, y+yOffset])

    return coords
}

function paintFill (screen, x, y, color) {
    if (screen[x][y] === color || isOutOfBoundaries(screen, x, y))
        return

    const oldColor = screen[x][y]
    screen[x][y] = color

    for (const [nextX, nextY] of getCoords(x, y))
        if (!isOutOfBoundaries(screen, nextX, nextY) && screen[nextX][nextY] === oldColor)
            paintFill(screen, nextX, nextY, color)
}

const input = [
    ['G', 'G', 'R', 'R', 'R', 'R'],
    ['G', 'G', 'G', 'G', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'B', 'B', 'B', 'R'],
    ['R', 'B', 'B', 'B', 'R', 'R'],
]

console.log(input)
paintFill(input, 3, 1, 'V')
console.log(input)