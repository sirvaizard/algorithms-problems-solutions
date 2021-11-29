// Validate BST: Implement a function to check if a binary tree is a binary search tree.

import { Binary } from './node.mjs'

// 14:01 14:06
// For each level we do 3 * 2^l comparions, l beeing the current level, so
// we do at most 2^h comparions per level, h beeing the tree height, and we know
// that h = log n which implies => 2^log n per level => n comparions per level,
// and we have to do it for each level of the tree, so n * h => n * log n
// O(n log n) time WRONG SOLUTION!!!
function isBinarySearchTree (root) {
    if (root.left) {
        if (root.left.value > root.value)
            return false
    }

    if (root.right) {
        if (root.right.value <= root.value)
            return false
    }

    return true
}

function validateBST (root) {
    if (!root)
        return true

    if(isBinarySearchTree(root)) {
        return validateBST(root.left) && validateBST(root.left)
    }
    return false
}

/**
 * 
 * @param root 
 * @param min 
 * @param max 
 * @returns 
 */

function checkBSTAux (root, min, max) {
    if (root === null)
        return true

    if((min && root.value <= min) || (max && root.value > max)) {
        return false
    }

    if (!checkBSTAux(root.left, min, root.value) || !checkBSTAux(root.right, root.value, max)) {
        return false
    }

    return true
}

function checkBST (root) {
    return checkBSTAux(root, null, null)
}

/**
 *      4
 *    2   6
 *  1  3 5  7
 *
 */

 const node1 = new Binary(1)
 const node2 = new Binary(2)
 const node3 = new Binary(3)
 const node4 = new Binary(4)
 const node5 = new Binary(5)
 const node6 = new Binary(6)
 const node7 = new Binary(7)

// BST
//  node1.left = node2
//  node1.right = node3
//  node2.left = node4
//  node2.right = node5
//  node3.left = node6
//  node3.right = node7

// not BST
 node4.left = node2
 node4.right = node6
 node2.left = node1
 node2.right = node3
 node6.left = node5
 node6.right = node7

/**
 *      20
 *   10    30
 *     25
 */
const node10 = new Binary(10)
const node20 = new Binary(20)
const node30 = new Binary(30)
const node25 = new Binary(25)

node20.left = node10
node20.right = node30
node10.right = node25

console.log(checkBST(node20))
console.log(checkBST(node4))