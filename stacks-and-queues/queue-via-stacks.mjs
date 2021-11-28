// Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
    constructor () {
        this.main = new Stack()
        this.aux = new Stack()
    }

    push (value) {
        while (!this.main.isEmpty()) {
            this.aux.push(this.main.pop())
        }

        this.main.push(new Node(value))

        while (!this.aux.isEmpty()) {
            this.main.push(this.aux.pop())
        }
    }

    pop () {
        return this.main.pop().value
    }

    isEmpty () {
        return this.main.isEmpty()
    }
}


export class Stack {
    constructor () {
        this.top = null
    }

    pop () {
        if (this.top === null)
            throw new Error('Empty stack')

        const node = this.top
        this.top = this.top.next

        return node
    }

    push (node) {
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


const queue = new MyQueue()

queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5)

while(!queue.isEmpty())
    console.log(queue.pop())