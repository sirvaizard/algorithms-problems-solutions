// BST Sequences: A binary search tree was created by traversing through an array from left to right
// and inserting each element. Given a binary search tree with distinct elements, print all possible
// arrays that could have led to this tree.
// e.g
//      2
//    1   3
//
// Output: {2, 1, 3}, {2, 3, 1}

import { Binary } from './node.mjs'

function BSTSequences (root) {
    
}

const node1 = new Binary(1)
const node2 = new Binary(2)
const node3 = new Binary(3)

node2.left = node1
node2.right = node3

console.log(BSTSequences(node2))