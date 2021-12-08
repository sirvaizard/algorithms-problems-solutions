class Node {
    constructor () {
        this.value = ''
        this.children = new Map()
    }

    put (key, value) {
        let node = this
        for (const char of key) {
            if (!node.children.has(char))
                node.children.set(char, new Node())
            node = node.children.get(char)
        }

        node.value = value
    }

    find (key, returnNode=false) {
        let node = this

        for (const char of key) {
            if (node.children.has(char))
                node = node.children.get(char)
            else
                return null
        }

        return returnNode ? node : node.value
    }

    keysWithPrefix (prefix) {
        const results = []
        const node = this.find(prefix, true)

        this.collect(node, prefix.split(''), results)

        return results
    }

    collect (node, prefix, results) {
        if (!node)
            return

        if (node.value)
            results.push(prefix.join(''))
        
        for (const char of node.children.keys()) {
            prefix.push(char)
            this.collect(node.children.get(char), prefix, results)
            prefix.pop()
        }
    }

    print (node=this) {
        if (!node)
            return
        
        for (const iterator of this.children.entries()) {
            const [key, value] = iterator
            console.log(key)
            value.print()
        }
    }
}

/**
 *       a         b        c           t                [tea, teacher, ted, teen]
 *       w         e        a       e        o
 *       a         a        r   a*  d*  e    o
 *       y         c        d   c       n*   l*
 *                 h            h
 *                              e
 *                              r*
 */

const node = new Node()
node.put('tea', 1)
node.put('ted', 2)
node.put('ten', 3)
node.put('teen', 4)
node.put('teacher', 5)
node.put('beach', 6)
node.put('tool', 7)
node.put('card', 8)
node.put('away', 9)

console.log(node.keysWithPrefix('te'))
