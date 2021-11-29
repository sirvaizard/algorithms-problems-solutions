// List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

import { Binary } from './node.mjs'

// 13:00 - 13:05
// O(n) time | O(n) space
function listOfDepths (root) {
    const queue = [root]

    const linkedLists = []

    while (queue.length) {
        const node = queue.shift()

        if(!linkedLists[node.height]) {
            linkedLists[node.height] = new Node(node)
        } else {
            linkedLists[node.height].add(node)
        }

        const [left, right] = [node.left, node.right]
        if (left) {
            left.height = node.height + 1
            queue.push(left)
        }
        if (right) {
            right.height = node.height + 1
            queue.push(right)
        }
    }

    return linkedLists
}

function listOfDepthsDFS (root, lists, height) {
    if (!root)
        return

    if (!lists[height])
        lists[height] = new Node(root)
    else
        lists[height].add(root)
    
    listOfDepthsDFS(root.left, lists, height + 1)
    listOfDepthsDFS(root.right, lists, height + 1)

    return lists
}

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }

    // O(n) time
    add (node) {
        let currentNode = this
        while(currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = new Node(node)
    }

    toString () {
        let node = this

        const values = []

        while (node) {
            values.push(node.value.value)
            node = node.next
        }

        return values.join('->')
    }
}

/**
 *        1
 *     2     3
 *   4  5   6  7
 */

const node1 = new Binary(1)
const node2 = new Binary(2)
const node3 = new Binary(3)
const node4 = new Binary(4)
const node5 = new Binary(5)
const node6 = new Binary(6)
const node7 = new Binary(7)

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.left = node6
node3.right = node7

const lists = listOfDepths(node1)
for (const [level, list] of Object.entries(lists))
    console.log(`${level}: ${list.toString()}`)

const lists2 = listOfDepthsDFS(node1, [], 0)
for (const [level, list] of Object.entries(lists2))
    console.log(`${level}: ${list.toString()}`)