class Node {
    constructor (value) {
        this.value = value
        this.visited = false
        this.edges = []
    }
}

class Edge {
    constructor (destination, cost) {
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

        if (left < this.items.length && this.items[left].cost < this.items[min].cost)
            min = left
        
        if (right < this.items.length && this.items[right].cost < this.items[min].cost)
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

    push (item) {
        this.items.push(item)

        let i = this.items.length-1
        
        while (i > 0 && this.items[this.parent(i)].cost > this.items[i].cost) {
            this.swap(i, this.parent(i))
            i = this.parent(i)
        }

    }

    swap (i, j) {
        const temp = this.items[i]
        this.items[i] = this.items[j]
        this.items[j] = temp
    }

    isEmpty () {
        return this.items.length === 0
    }
}

function prim (graph) {
    const pq = new PriorityQueue(graph[0].edges)
    graph[0].visited = true

    const edges = []

    while (!pq.isEmpty()) {
        const edge = pq.pop()
        
        if (!edge.destination.visited) {
            edges.push(edge)
            edge.destination.visited = true
            for (const e of edge.destination.edges) {
                if (!e.destination.visited)
                    pq.push(e)
            }
        }
    }

    console.log(edges)
}

// const pq = new PriorityQueue([])
// pq.push(new Edge(null, 5))
// pq.push(new Edge(null, 9))
// pq.push(new Edge(null, 2))
// pq.push(new Edge(null, 8))
// pq.push(new Edge(null, 3))
// pq.push(new Edge(null, 6))

// while (!pq.isEmpty())
//     console.log(pq.pop().cost)

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g')
const h = new Node('h')
const i = new Node('i')

a.edges.push(new Edge(b, 4), new Edge(h, 8))
b.edges.push(new Edge(a, 4), new Edge(c, 8), new Edge(h, 11))
c.edges.push(new Edge(b, 8), new Edge(i, 2), new Edge(f, 4), new Edge(d, 7))
d.edges.push(new Edge(c, 7), new Edge(e, 9), new Edge(f, 14))
e.edges.push(new Edge(d, 9), new Edge(f, 10))
f.edges.push(new Edge(e, 10), new Edge(d, 14), new Edge(c, 4), new Edge(g, 2))
g.edges.push(new Edge(f, 2), new Edge(i, 6), new Edge(h, 1))
h.edges.push(new Edge(a, 8), new Edge(b, 11), new Edge(i, 7), new Edge(g, 1))
i.edges.push(new Edge(c, 2), new Edge(g, 6), new Edge(h, 7))

const graph = [a, b, c, d, e, f, g, i]

prim(graph)