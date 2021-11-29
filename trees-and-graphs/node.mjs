export class Node {
    constructor (value) {
        this.value = value
        this.adjacents = []
        this.visited = false
    }

    addAdjacent (node) {
        this.adjacents.push(node)
    }
}

export class Binary {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
        this.height = 0
        this.parent = null
    }
}

class Tree {
    constructor () {}
}