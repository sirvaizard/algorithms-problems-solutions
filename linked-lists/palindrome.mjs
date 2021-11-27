// Palindrome: Implement a function to check if a linked list is a palindrome.

import Node from './node.mjs'

// 19:28  19:32
// O(n) time O(n) space
function palindrome (head) {
    let reversed = reverse(head)

    while (head) {
        if (head.value !== reversed.value)
            return false
        head = head.next
        reversed = reversed.next
    }

    return true
}

function reverse (list) {
    let head = null

    while(list) {
        const node = new Node(list.value)
        if (!head) {
            head = node
        } else {
            node.next = head
            head = node
        }
        list = list.next
    }

    return head
}

const list = new Node('a')
    .add('b')
    .add('c')
    .add('b')
    .add('a')

console.log(palindrome(list))