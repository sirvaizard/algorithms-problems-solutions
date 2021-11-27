// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

// 18:19 - 18:21
// O(n) time | O(1) space
function kthToLast(head, k) {
    let length = 0
    let node = head
    while (node) {
        length++
        node = node.next
    }

    let node = head
    let element = length - k
    let counter = 0
    while (counter < element) {
        node = node.next
        counter++
    }
    return node
}