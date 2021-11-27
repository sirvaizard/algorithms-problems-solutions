// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
// to be after the elements less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.

import Node from './node.mjs'

// 18:52 - 19:07
// O(n) time | O(1) space
function partition (head, x) {
    let node = head
    let prev = null

    while(node) {
        if (node.value < x) {
            if (prev) {
                prev.next = node.next
                node.next = head
                head = node
                node = prev.next
                continue
            }
        }
        prev = node
        node = node.next
    }

    return head
}

const head = new Node(3)
    .add(5)
    .add(8)
    .add(5)
    .add(10)
    .add(2)
    .add(1)

head.print()

partition(head, 5).print()