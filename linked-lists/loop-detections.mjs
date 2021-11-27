// Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
// as to make a loop in the linked list.

import Node from './node.mjs'

/**
 * Ask: The list can have repeated elements?
 */

// 20:00 - 20:01
// O(n) time | O(n) space
function loopDetection (list) {
    const nodes = new Set()

    let node = list
    while(node) {
        if (nodes.has(node)) {
            return node
        }
        nodes.add(node)
        node = node.next
    }

    return null
}

const list = new Node('A')
    .add('B')
    .add('C')
    .add('D')
    .add('E')

let node = list
while (node.next) {
    node = node.next
}
node.next = list

console.log(loopDetection(list))