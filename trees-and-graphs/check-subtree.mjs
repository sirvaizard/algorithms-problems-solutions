// Check Subtree: T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an
// algorithm to determine ifT2 is a subtree of T1.
// A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2.
// That is, if you cut off the tree at node n, the two trees would be identical.

import { Binary } from './node.mjs'

/**
 * Ask: A tree can have repeated nodes(two or more nodes with the same value)?
 */

// This will be O(m) m = number of nodes of t2
function equalTrees (root1, root2) {
    if (!root1 || !root2)
        return root1 === root2

    return root1.value === root2.value
        && equalTrees(root1.left, root2.left)
        && equalTrees(root1.right, root2.right)
}

// There are two possible situations:
// first: no repeated nodes are allowed, in this case, we'll only call equalTrees
//        one time, hence this will run in O(n).
// second: repeated nodes are allowed, in this case, we could call equalTrees n times
//         which would give us O(n * m) (actually O(n + km))
function checkTree (t1, t2) {
    const queue = [t1]

    while (queue.length) {
        const node = queue.shift()
        
        if (node.value === t2.value && equalTrees(node, t2))
            return true
        if (node.left)
            queue.push(node.left)
        if (node.right)
            queue.push(node.right)
    }
    return false
}

/**
 *       A               B
 *       0               0
 *    1     2         1     2
 *   3 4   5 6       3 4   5 6
 */

const nodeA0 = new Binary(0)
const nodeA1 = new Binary(1)
const nodeA2 = new Binary(2)
const nodeA3 = new Binary(3)
const nodeA4 = new Binary(4)
const nodeA5 = new Binary(5)
const nodeA6 = new Binary(6)

nodeA0.left = nodeA1
nodeA0.right = nodeA2
nodeA1.left = nodeA3
nodeA1.right = nodeA4
nodeA2.left = nodeA5
nodeA2.right = nodeA6

const nodeB0 = new Binary(0)
const nodeB1 = new Binary(1)
const nodeB2 = new Binary(2)
const nodeB3 = new Binary(3)
const nodeB4 = new Binary(4)
const nodeB5 = new Binary(5)
const nodeB6 = new Binary(6)

nodeB0.left = nodeB1
nodeB0.right = nodeB2
nodeB1.left = nodeB3
nodeB1.right = nodeB4
nodeB2.left = nodeB5
nodeB2.right = nodeB6

console.log(equalTrees(nodeA0, nodeB0))

/**
 *             C                 D
 *             0                 4
 *         1        2          9   10
 *      3    4     5  6
 *    7  8  9 10  11
 */

 const nodeC0 = new Binary(0)
 const nodeC1 = new Binary(1)
 const nodeC2 = new Binary(2)
 const nodeC3 = new Binary(3)
 const nodeC4 = new Binary(4)
 const nodeC5 = new Binary(5)
 const nodeC6 = new Binary(6)
 const nodeC7 = new Binary(7)
 const nodeC8 = new Binary(8)
 const nodeC9 = new Binary(9)
 const nodeC10 = new Binary(10)
 const nodeC11 = new Binary(11)
 
 nodeC0.left = nodeC1
 nodeC0.right = nodeC2
 nodeC1.left = nodeC3
 nodeC1.right = nodeC4
 nodeC2.left = nodeC5
 nodeC2.right = nodeC6
 nodeC3.left = nodeC7
 nodeC3.right = nodeC8
 nodeC4.left = nodeC9
 nodeC4.right = nodeC10
 nodeC5.left = nodeC11

 const nodeD4 = new Binary(4)
 const nodeD9 = new Binary(9)
 const nodeD10 = new Binary(10)
//  const nodeD3 = new Binary(3)
//  const nodeD4 = new Binary(4)
//  const nodeD5 = new Binary(5)
//  const nodeD6 = new Binary(6)
 
 nodeD4.left = nodeD9
 nodeD4.right = nodeD10
 
 
 console.log(checkTree(nodeC0, nodeD4))