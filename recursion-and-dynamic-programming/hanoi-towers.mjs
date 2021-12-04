class Tower {
    constructor (index) {
        this.disks = null
        this.index = index
    }

    isEmpty () {
        return this.disks === null
    }

    peek () {
        return this.disks ? this.disks.value : null
    }

    pop () {
        if (this.isEmpty())
            throw new Error('Cannot pop an empty stack')

        const { value } = this.disks
        this.disks = this.disks.next

        return value
    }

    push (value) {
        if (!this.isEmpty() && this.peek() < value)
            throw new Error ('Cannot stack over a smaller value')
        
        const node = { value, next: this.disks }
        this.disks = node
    }

    moveToTop (tower) {
        const value = this.pop()
        tower.push(value)
    }

    moveDisks (n, destination, buffer) {
        console.log(`n: ${n}`)
        console.log(this.toString())
        console.log(buffer.toString())
        console.log(destination.toString() + '\n')

        if (n > 0) {
            this.moveDisks(n - 1, buffer, destination)
            this.moveToTop(destination)
            buffer.moveDisks(n - 1, destination, this)
        }
    }

    toString () {
        let node = this.disks
        const values = []
        while (node) {
            values.push(node.value)
            node = node.next
        }

        return `Tower ${this.index}: ${values.join('->')}`
    }
}

const tower = new Tower('origin')
const buffer = new Tower('buffer')
const destination = new Tower('destination')

const n = 3

for (let i = n-1; i >= 0; i--)
    tower.push(i)

tower.moveDisks(n, destination, buffer)
console.log(tower.toString())
console.log(buffer.toString())
console.log(destination.toString())