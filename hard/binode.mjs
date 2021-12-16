// BiNode: Consider a simple data structure called BiNode, which has pointers to two other nodes. The
// data structure BiNode could be used to represent both a binary tree (where node1 is the left node
// and node2 is the right node) or a doubly linked list (where node1 is the previous node and node2
// is the next node). Implement a method to convert a binary search tree (implemented with BiNode)
// into a doubly linked list. The values should be kept in order and the operation should be performed
// in place (that is, on the original data structure).

/**
 *             8
 *      4             12
 *   2     6       10     14
 * 1   3 5   7   9   12 13   15
 * 
 * THIS SOLUTION IS WRONG!!!!
 */

class BiNode {
    constructor (value) {
        this.value = value
        this.node1 = null
        this.node2 = null
    }
}

function transformInLinkedList (node) {
    if (!node)
        return null

    const part1 = transformInLinkedList(node.node1)
    const part2 = transformInLinkedList(node.node2)
    
    if (part1)
        concat(getTail(part1), node)

    if (part2)
        concat(node, getTail(part2))

    return part1 ? part1 : node
}

function concat (x, y) {
    x.node2 = y
    y.node1 = x
}

function getTail (node) {
    if (!node)
        return null

    while (node.node2)
        node = node.node2

    return node
}

const n1 = new BiNode(1)
const n2 = new BiNode(2)
const n3 = new BiNode(3)
const n4 = new BiNode(4)
const n5 = new BiNode(5)
const n6 = new BiNode(6)
const n7 = new BiNode(7)
const n8 = new BiNode(8)
const n9 = new BiNode(9)
const n10 = new BiNode(10)
const n11 = new BiNode(11)
const n12 = new BiNode(12)
const n13 = new BiNode(13)
const n14 = new BiNode(14)
const n15 = new BiNode(15)
/**
 *             8
 *      4             12
 *   2     6       10     14
 * 1   3 5   7   9   11 13   15
 */
n8.node1 = n4
n8.node2 = n12

n4.node1 = n2
n4.node2 = n6

n12.node1 = n10
n12.node2 = n14

n2.node1 = n1
n2.node2 = n3

n6.node1 = n5
n6.node2 = n7

n10.node1 = n9
n10.node2 = n11

n14.node1 = n13
n14.node2 = n15

transformInLinkedList(n8)

let n = n1
let v = []
while (n) {
    v.push(n.value)
    n = n.node2
}

console.log(v.join('->'))
