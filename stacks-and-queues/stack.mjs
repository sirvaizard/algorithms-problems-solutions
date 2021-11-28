export default class Stack {
    constructor () {
        this.top = null
    }

    pop () {
        if (this.top === null)
            throw new Error('Empty stack')

        const node = this.top
        this.top = this.top.next

        return node.value
    }

    push (value) {
        const node = new Node(value)
        node.next = this.top
        this.top = node
    }

    peek () {
        return this.top ? this.top.value : null
    }

    isEmpty () {
        return this.top === null
    }
}

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}