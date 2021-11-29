// Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
// route between two nodes.

import { Node } from './node.mjs'

// 00:12 00:14
// Depth-First Search
// O(n) time | O(h) space, h = height
function routeBetweenNodesDFS(node1, node2) {
    if (node1 === null)
        return false

    if (node1.value === node2.value)
        return true

    node1.visited = true

    for (const adjacent of node1.adjacents) {
        if (!adjacent.visited) {
            const found = routeBetweenNodesDFS(adjacent, node2)
            if (found)
                return true
        }
    }

    return false
}

// Breadth-First Search
// O(n) time | O(branchFactor^h) space
function routeBetweenNodesBFS(node1, node2) {
    const queue = [node1]

    while (queue.length !== 0) {
        const node = queue.shift()

        if (node.value === node2.value)
            return true

        node.visited = true

        for (const adjacent of node.adjacents) {
            if (!adjacent.visited) {
                queue.push(adjacent)
            }
        }
    }

    return false
}


const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
const node7 = new Node(7)
const node8 = new Node(8)

node1.addAdjacent(node2)

node2.addAdjacent(node3)
node2.addAdjacent(node4)
node2.addAdjacent(node5)

node4.addAdjacent(node1)
node4.addAdjacent(node6)

node5.addAdjacent(node7)

// node6.addAdjacent(node8)

console.log(routeBetweenNodesBFS(node1, node8))

