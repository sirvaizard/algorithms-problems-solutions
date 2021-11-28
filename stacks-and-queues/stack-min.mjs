// Stack Min: How would you design a stack which, in addition to push and pop, has a function min
// which returns the minimum element? Push, pop and min should all operate in 0(1) time.

class Stack {
    constructor () {
        this.top = null
        this._min = null
    }

    push (value) {
        const node = new Node(value)

        if (!this.top) {
            this.top = node
            this._min = node
        } else {
            if (value < this._min.value) {
                node.nextMin = this._min
                this._min = node
            }
            node.next = this.top
            this.top = node
        }

        return this
    }

    pop () {
        if (!this.top)
            throw new Error('Empty Stack')

        const value = this.top.value

        if (this.top === this._min) {
            this._min = this._min.nextMin
        }

        this.top = this.top.next
        return value
    }

    min () {
        return this._min.value
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

const stack = new Stack()
    .push(6)
    .push(5)
    .push(4)
    .push(3)
    .push(2)
    .push(1)

while(!stack.isEmpty()) {
    console.log(stack.min())
    console.log(stack.pop())
}