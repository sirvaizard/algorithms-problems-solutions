// Sum Lists: You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
// function that adds the two numbers and returns the sum as a linked list.
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.

import Node from './node.mjs'

// 19:13 - 19:19
// O(n) time n beeing the length of the greatest number
// O(m) space m beeing the length of the sum
function sumLists(list1, list2) {
    const sum = listToNumber(list1) + listToNumber(list2)
    return numberToList(sum)
}

function listToNumber(head) {
    let multiplicationFactor = 1
    let number = 0
    while(head) {
        number += head.value * multiplicationFactor
        multiplicationFactor *= 10
        head = head.next
    }

    return number
}

function numberToList(number) {
    let head = null
    let tail = null
    while(number !== 0) {
        const n = number % 10
        number -= n
        number = Math.floor(number / 10)

        const node = new Node(n)

        if (!head) {
            head = tail = node    
        } else {
            tail.next = node
            tail = node
        }
    }

    return head
}

const list1 = new Node(7)
    .add(1)
    .add(6)

const list2 = new Node(5)
    .add(9)
    .add(2)

sumLists(list1, list2).print()