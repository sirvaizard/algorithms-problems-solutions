export default class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }

    add (value) {
        let node = this
        while (node.next) {
            node = node.next
        }
        node.next = new Node(value)
        return this
    }

    print () {
        let head = this
        let values = []
        while (head) {
            values.push(head.value)
            head = head.next
        }

        console.log(values.join('->'))
    }
}