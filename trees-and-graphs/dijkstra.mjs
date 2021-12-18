class Node {
    constructor (value) {
        this.value = value
        this.distance = Number.MAX_SAFE_INTEGER
        this.edges = []
    }
}

class Edge {
    constructor (source, destination, cost) {
        this.source = source
        this.destination = destination
        this.cost = cost
    }
}

class PriorityQueue {
    constructor (items) {
        this.items = [...items]
        this.buildMinHeap()
    }

    parent (i) {
        return Math.floor((i-1) / 2)
    }

    left (i) {
        return (i*2) + 1
    }

    right (i) {
        return (i+1) * 2
    }

    heapify (i) {
        const right = this.right(i)
        const left = this.left(i)

        let min = i

        if (left < this.items.length && this.items[left].distance < this.items[min].distance)
            min = left
        
        if (right < this.items.length && this.items[right].distance < this.items[min].distance)
            min = right

        if (min !== i) {
            const temp = this.items[min]
            this.items[min] = this.items[i]
            this.items[i] = temp

            this.heapify(min)
        }
    }

    buildMinHeap () {
        for (let i = Math.floor(this.items.length / 2); i >= 0; i--)
            this.heapify(i)
    }

    pop () {
        const min = this.items[0]

        this.items[0] = this.items[this.items.length-1]

        this.items.pop()

        this.heapify(0)

        return min
    }

    isEmpty () {
        return this.items.length === 0
    }
}

const s = new Node('s')
const t = new Node('t')
const y = new Node('y')
const x = new Node('x')
const z = new Node('z')

s.edges.push(new Edge(s, t, 10), new Edge(s, y, 5))
t.edges.push(new Edge(t, x, 1), new Edge(t, y, 2))
y.edges.push(new Edge(y, t, 3), new Edge(y, x, 9), new Edge(y, z, 2))
x.edges.push(new Edge(x, z, 4))
z.edges.push(new Edge(z, x, 6))

const graph = [s, t, y, x, z]

function dijkstra (graph) {
    const source = graph[0]
    const pq = new PriorityQueue(graph)

    source.distance = 0

    while (!pq.isEmpty()) {
        const node = pq.pop()

        for (const edge of node.edges) {
            if (node.distance+edge.cost < edge.destination.distance)
                edge.destination.distance = node.distance+edge.cost
        }
    }
}

dijkstra(graph)

console.log(graph)