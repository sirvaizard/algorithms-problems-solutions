// Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of
// projects, where the second project is dependent on the first project). All of a project's dependencies
// must be built before the project is. Find a build order that will allow the projects to be built. If there
// is no valid build order, return an error.

// Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: f, e, a, b, d, c

import { Node } from './node.mjs'
import { LinkedList } from './topological-sort.mjs'

class MyLinkedList extends LinkedList {
    toString () {
        const values = []
        
        let item = this.head
        while (item) {
            values.push(item.value.value)
            item = item.next
        }

        return values.join('->')
    }
}

// 18:18 18:20
function buildOrder (projects, dependencies) {
    for (const [projectA, projectB] of dependencies) {
        projectA.addAdjacent(projectB)
    }

    const linkedList = new MyLinkedList()
    
    for (const project of projects) {
        if (!project.visited)
            BFS(project, linkedList)
    }

    console.log(linkedList.toString())
}

function BFS (root, linkedList) {
    if (!root)
        return

    root.visited = true

    for (const adjacent of root.adjacents) {
        if (!adjacent.visited)
            BFS(adjacent, linkedList)
    }

    linkedList.add(root)
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

const projects = [a, b, c, d, e, f]
const dependencies = [[a, d], [f, b], [b, d], [f, a], [d, c]]

buildOrder(projects, dependencies)