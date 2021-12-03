import { Binary } from './node.mjs'

/**
 *     1             1
 *   2   3   ==>   3    2
 * 4  5 6  7     7  6 5   4
 */

/**
 *  O(n)
 */
function invertTree (root) {
    if (!root)
        return

    const temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)
}

const n1 = new Binary(1)
const n2 = new Binary(2)
const n3 = new Binary(3)
const n4 = new Binary(4)
const n5 = new Binary(5)
const n6 = new Binary(6)
const n7 = new Binary(7)

n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n3.left = n6
n3.right = n7

invertTree(n1)

function printTree (root) {
    if (!root)
        return
    
    console.log(`${root.value}: ${root.left?.value} | ${root.right?.value}`)
    printTree(root.left)
    printTree(root.right)
}

printTree(n1)