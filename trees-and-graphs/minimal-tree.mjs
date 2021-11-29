// Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an
// algorithm to create a binary search tree with minimal height.

import { Binary as Node } from './node.mjs'

function minimalTree (array) {
    return minimalTreeFac(array, 0, array.length)
}

function minimalTreeFac (array, start, end) {
    if (end < start)
        return null

    const half = Math.floor((end + start) / 2)
    
    const node = new Node(array[half])

    node.left = minimalTreeFac(array, start, half-1)
    node.right = minimalTreeFac(array, half+1, end)

    return node
}

console.log(minimalTree([1,2,3,4,5,6,7,8,9,10]))
