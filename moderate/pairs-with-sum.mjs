// Pairs with Sum: Design an algorithm to find all pairs of integers within an array which sum to a
// specified value.

function pairsWithSum (arr, value) {
    const visited = new Set()
    const pairs = []

    for (const number of arr) {
        if (visited.has(value - number))
            pairs.push([number, value-number])

        visited.add(number)
    }

    return pairs
}

console.log(pairsWithSum([1, 2, 3, 4, 5, 6, 7], 8))