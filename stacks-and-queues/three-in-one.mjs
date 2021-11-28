// Three in One: Describe how you could use a single array to implement three stacks.

/**
 * You can keep three variables to mark the top of the three stacks(t1, t2, t3),
 * and also keep track of the number of elements that each stack have. Or you can keep
 * where each stack begin and the number of elements.
 * e.g.
 * t1=0               t2=3              t3=6
 * [null, null, null, null, null, null, null, null, null, null]
 * To insert an item into a stack, you pass the value, and the number of the stack,
 * before inserting you check if the next position of the stack is not overpassing
 * the beginning of the next stack
 */

class ThreeStacks {
    constructor (length) {
        this.data = Array(length).fill(null)
        
        const stacksCapacity = Math.floor(length / 3)

        this.sizes = {
            t1: 0,
            t2: 0,
            t3: 0
        }
        
        this.t1 = 0
        this.t2 = stacksCapacity
        this.t3 = stacksCapacity * 2
    }

    pop (stack) {
        if (stack <= 0 || stack > 3)
            throw new Error('Invalid Stack')

        if (this.sizes[`t${stack}`] === 0)
            throw new Error('Empty Stack')

        const value = this.data[this.sizes[`t${stack}`] + this[`t${stack}`]]
        this.sizes[`t${stack}`]--
        
        return value
    }

    push (stack, value) {
        if (stack <= 0 || stack > 3)
            throw new Error('Invalid Stack')

        switch (stack) {
            case 1:
                if (this.t1 + this.sizes.t1 === this.t2)
                    throw new Error('Stack is full')
                break
            case 2:
                if (this.t2 + this.sizes.t2 === this.t3)
                    throw new Error('Stack is full')
                break
            case 3:
                if (this.t3 + this.sizes.t3 === this.data.length)
                    throw new Error('Stack is full')
                break
        }

        this.data[this[`t${stack}`] + this.sizes[`t${stack}`]] = value
        this.sizes[`t${stack}`]++
    }
}

// const stacks = new ThreeStacks(12)
// console.log(stacks.data)

// stacks.push(1, 1)
// stacks.push(1, 2)
// stacks.push(1, 3)
// stacks.push(1, 4)
// stacks.push(2, 5)
// stacks.push(2, 6)
// stacks.push(2, 7)
// stacks.push(2, 8)
// stacks.push(3, 9)
// stacks.push(3, 10)
// stacks.push(3, 11)
// stacks.push(3, 12)

// console.log(stacks.pop(1))
// console.log(stacks.data)
