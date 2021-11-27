// Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the inter­
// secting node. Note that the intersection is defined based on reference, not value. That is, if the kth
// node of the first linked list is the exact same node (by reference) as the jth node of the second
// linked list, then they are intersecting.

import Node from './node.mjs'

// 19:49 - 19:51
// O(n) time | O(n) space, n beeing the size of the largest list
function intersection (list1, list2) {
    const refs = new Set()

    let node = list1
    while (node) {
        refs.add(node)
        node = node.next
    }

    let node = list2
    while(node) {
        if (refs.has(node))
            return true
        node = node.next
    }

    return false
}