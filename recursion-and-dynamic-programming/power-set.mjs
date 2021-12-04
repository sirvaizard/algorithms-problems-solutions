// Power Set: Write a method to return all subsets of a set.

// ['a', 'b', 'c'] ==> [['a'], ['b'], ['c'], ['a', 'b'], ['a', 'b', 'c']]

/**
 * Ask: ['a', 'b'] === ['b', 'a'] ?
 * 
 * O(n2^2) time
 * O(2^n) space
 */

function powerSet (set) {
    const subsets = [[]]

    for (const item of set) {               // n
        for (const subset of [...subsets])  // 2^0 + 2^1 + 2^4 + ... + 2^n = 2^n
            subsets.push([...subset, item])
    }

    return subsets
}

console.log(powerSet(['a', 'b', 'c']))

/**
 *                
 *         a      b     c
 *      ab   ac   bc  
 *    abc   
 */