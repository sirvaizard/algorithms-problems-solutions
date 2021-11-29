// First Common Ancestor: Design an algorithm and write code to find the first common ancestor
// of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
// necessarily a binary search tree.

/**
 * Ask: It is possible that NodeA is parent of NodeB or vice-versa?
 */

import { Binary } from './node.mjs'


// O(log n) time | O(log n) space
function firstCommonAncestor (nodeA, nodeB) {
    const ancestors = new Set()

    while (nodeA || nodeB) {
        if (nodeA === nodeB)
            return nodeA

        if (nodeA && ancestors.has(nodeA))
            return nodeA
        if (nodeB && ancestors.has(nodeB))
            return nodeB

        if (nodeA) {
            ancestors.add(nodeA)
            nodeA = nodeA.parent
        }

        if (nodeB) {
            ancestors.add(nodeB)
            nodeB = nodeB.parent
        }
    }

    return null
}

/**
 *          1
 *       2     3
 *     4  5  6   7
 *   8     9
 */

const node1 = new Binary(1)
const node2 = new Binary(2)
const node3 = new Binary(3)
const node4 = new Binary(4)
const node5 = new Binary(5)
const node6 = new Binary(6)
const node7 = new Binary(7)
const node8 = new Binary(8)
const node9 = new Binary(9)

node2.parent = node1
node3.parent = node1
node4.parent = node2
node5.parent = node2
node6.parent = node3
node7.parent = node3
node8.parent = node4
node9.parent = node5

console.log(firstCommonAncestor(node8, node2).value)
