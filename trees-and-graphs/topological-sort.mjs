import { Node } from './node.mjs'

export class LinkedList {
    constructor () {
        this.head = null
    }

    add (value) {
        const item = new LinkedListItem(value)
        
        if (!this.head) {
            this.head = item
        } else {
            item.next = this.head
            this.head = item
        }

        return this
    }

    toString () {
        const values = []
        
        let item = this.head
        while (item) {
            values.push(item.value)
            item = item.next
        }

        return values.join('->')
    }
}

class LinkedListItem {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

// const cuecas = new Node('cuecas')
// const calcas = new Node('calcas')
// const cinto = new Node('cinto')
// const camisa = new Node('camisa')
// const gravata = new Node('gravata')
// const paleto = new Node('paleto')
// const meias = new Node('meias')
// const sapatos = new Node('sapatos')
// const relogio = new Node('relogio')

// cuecas.addAdjacent(calcas)
// cuecas.addAdjacent(sapatos)

// calcas.addAdjacent(sapatos)
// calcas.addAdjacent(cinto)

// cinto.addAdjacent(paleto)

// camisa.addAdjacent(cinto)
// camisa.addAdjacent(gravata)

// gravata.addAdjacent(paleto)

// meias.addAdjacent(sapatos)

// const graph = [cuecas, calcas, cinto, camisa, gravata, paleto, meias, sapatos, relogio]

// function DFS (root, linkedList) {
//     if (!root)
//         return

//     root.visited = true
//     for (const adjacent of root.adjacents) {
//         if (!adjacent.visited)
//             DFS(adjacent, linkedList)
//     }

//     linkedList.add(root.value)
// }

// const linkedList = new LinkedList()
// for (const node of graph) {
//     if (!node.visited)
//         DFS(node, linkedList)
// }

// console.log(linkedList.toString())