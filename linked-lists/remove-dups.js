// Remove Dups! Write code to remove duplicates from an unsorted linked list.

// 18:12 - 18:15
// O(n) time | O(m) space, m beeing the number of not repeating elements
function removeDups(head) {
    if (!head)
        return head

    const existingNumbers = new Set()

    let node = head
    let prev = null
    while (node) {
        if (existingNumbers.has(node.data)) {
            prev.next = node.next
        } else {
            existingNumbers.add(node.data)
            prev = node
        }
        node = node.next
    }

    return head
}