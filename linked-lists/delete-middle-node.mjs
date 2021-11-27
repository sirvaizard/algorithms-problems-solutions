// Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
// the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
// that node.

import Node from './node.mjs'

// 18:25 - 18:28
function deleteMiddleNode(head) {
    let begin = head
    let end = head.next

    while (end.next) {
        console.log(begin.value, end.value)
        begin = begin.next
        end = end.next
        end = end.next ? end.next : end
    }

    begin.next = begin.next.next

    return head
}

// a->b->c->d->e->f
const head = 
    new Node('a')
    .add('b')
    .add('c')
    .add('d')
    .add('e')
    .add('f')

console.log(deleteMiddleNode(head).print())