// Stack of Plates:
// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
// threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
// composed of several stacks and should create a new stack once the previous one exceeds capacity.
// SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
// (that is, pop () should return the same values as it would if there were just a single stack).
// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a specific sub­
// stack.

class SetOfStacks {
    constructor (threshold) {
        this.threshold = threshold
        this.stacks = [{
            data: null,
            size: 0
        }]
    }

    push (value) {
        let stack = this.stacks[this.stacks.length-1]

        if (stack.size === this.threshold) {
            stack = {
                data: null,
                size: 0
            }

            this.stacks.push(stack)
        }

        const node = new Node(value)

        if (!stack.data) {
            stack.data = node
        } else {
            node.next = stack.data
            stack.data = node
        }

        stack.size++
    }

    pop () {
        const stack = this.stacks[this.stacks.length-1]

        if (this.stacks.length === 1 && stack.size === 0)
            throw new Error('Stacks are empty')

        const value = stack.data.value
        stack.data = stack.data.next
        stack.size--

        if (!stack.data && stack.size === 0)
            this.stacks.pop()

        return value
    }

    popAt (index) {
        const stack = this.stacks[index]

        if (this.stacks.length === 1 && stack.size === 0)
            throw new Error('Stacks are empty')

        const value = stack.data.value
        stack.data = stack.data.next
        stack.size--

        if (!stack.data && stack.size === 0) {
            this.stacks.splice(index, 1)
        }

        return value
    }

    print () {
        for(const [index, stack] of Object.entries(this.stacks)) {
            console.log(index)
            let node = stack.data
            while (node) {
                console.log(node.value)
                node = node.next
            }
        }
    }
}

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

const stack = new SetOfStacks(3)

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
stack.push(9)

stack.print()

console.log('popped: ', stack.popAt(1))
console.log('popped: ', stack.popAt(1))
console.log('popped: ', stack.popAt(1))

stack.print()
