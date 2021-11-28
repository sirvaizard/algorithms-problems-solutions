// Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
// an additional temporary stack, but you may not copy the elements into any other data structure
// (such as an array). The stack supports the following operations: push, pop, peek, and is Empty.

function sort (stack) {
    const auxStack = new Stack()
    auxStack.push(stack.pop())

    while(!auxStack.isEmpty() && !stack.isEmpty()) {
        let stacked = 0

        const temp = stack.pop()
        
        while (!auxStack.isEmpty() && auxStack.peek() > temp.value) {
            stack.push(auxStack.pop())
            stacked++
        }

        auxStack.push(temp)

        while (stacked > 0) {
            auxStack.push(stack.pop())
            stacked--
        }
    }
    
    while (!auxStack.isEmpty())
        stack.push(auxStack.pop())
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

        return this
    }

    peek () {
        return this.top ? this.top.value : null
    }

    isEmpty () {
        return this.top === null
    }

    print () {
        let node = this.top

        const values = []
        while (node) {
            values.push(node.value)
            node = node.next
        }

        console.log(values.join(', '))
    }

    sort () {
        sort(this)

        return this
    }
}

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

new Stack()
    .push(new Node(10))
    .push(new Node(1))
    .push(new Node(15))
    .push(new Node(3))
    .push(new Node(7))
    .push(new Node(2))
    .push(new Node(6))
    .push(new Node(4))
    .sort()
    .print()