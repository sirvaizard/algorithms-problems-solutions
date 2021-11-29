// Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a
// binary search tree. You may assume that each node has a link to its parent.

import { Binary } from './node.mjs'


// 16:36 16:42
// To find the successor we'll have to travel at most the height of the tree,
// because the successor of any node at the left side of the tree will at most
// at the root, the same happens with the right side, in the case of the root
// the sucessor will always be the leftmost node of the root's right node
// That will give us a O(log n) time and O(1) space
function successor (node) {
    // if parent >= node, go up 1 time
    // if parent < node go up util end -> if up until end < self return self
    if (node.right) {
        let n = node.right
        while (n.left) {
            n = n.left
        }

        return n
    }

    if (node.parent.value >= node.value)
        return node.parent

    let parent = node.parent
    while (parent.parent && parent.value < node.value) {
        parent = parent.parent
    }

    if (parent.value > node.value)
        return parent
    if (parent.value < node.value)
        return null
}

/**
 *      5
 *    3   7
 *  1  4 6  8
 *0  2
 */

const node0 = new Binary(0)
const node1 = new Binary(1)
const node2 = new Binary(2)
const node3 = new Binary(3)
const node4 = new Binary(4)
const node5 = new Binary(5)
const node6 = new Binary(6)
const node7 = new Binary(7)
const node8 = new Binary(8)

node5.left = node3
node5.right = node7

node3.parent = node5
node3.left = node1
node3.right = node4

node1.parent = node3
node1.left = node0
node1.right = node2

node0.parent = node1
node2.parent = node1

node7.parent = node5
node7.left = node6
node7.right = node8

node4.parent = node3

node6.parent = node7
node8.parent = node7

 console.log(successor(node0).value)
 console.log(successor(node1).value)
 console.log(successor(node2).value)
 console.log(successor(node3).value)
 console.log(successor(node4).value)
 console.log(successor(node5).value)
 console.log(successor(node6).value)
 console.log(successor(node7).value)