// Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
// node never differ by more than one.

import { Binary } from './node.mjs'

// 13:42 13:49
// O(n) time
function checkBalanced (root, height=0) {
    if (!root)
        return height - 1
    
    const leftHeight = checkBalanced(root.left, height + 1)
    const rightHeight = checkBalanced(root.right, height + 1)

    if (leftHeight === false || rightHeight === false)
        return false

    if (Math.abs(leftHeight - rightHeight) > 1)
        return false
    return Math.max(leftHeight, rightHeight)
}


// Book implementation
// O(n lg n)
function getHeight (root) {
    if (!root)
        return -1
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}

function isBalanced (root) {
    if (!root)
        return true

    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)

    if (Math.abs(leftHeight - rightHeight) > 1)
        return false
    return isBalanced(root.left) && isBalanced(root.right)
}


/**
 *      1
 *    2   3
 *  4  5 6  7
 *           8
 *            9
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
 
 node1.left = node2
 node1.right = node3
 node2.left = node4
 node2.right = node5
 node3.left = node6
 node3.right = node7
 node7.left = node8
 node8.left = node9

 console.log(checkBalanced(node1))
 console.log(isBalanced(node1))
