export default class Queue {
    constructor () {
        this.begin = null
        this.end = null
    }

    add (value) {
        const node = new Node(value)
        if (!this.begin) {
            this.begin = node
            this.end = node
        } else {
            this.end.next = node
            this.end = node
        }
    }
    
    remove () {
        if (!this.begin)
            throw new Error('Queue is empty')

        const value = this.begin.value
        this.begin = this.begin.next
        if (!this.begin)
            this.end = null

        return value
    }

    peek () {
        return this.begin ? this.begin.value : null
    }
    
    isEmpty () {
        return this.begin === null
    }
}


class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}