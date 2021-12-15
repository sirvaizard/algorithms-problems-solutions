// Sum Swap: Given two arrays of integers, find a pair of values (one value from each array) that you
// can swap to give the two arrays the same sum.
// EXAMPLE
// lnput:{4, 1, 2, 1, 1, 2} and {3, 6, 3, 3}
// Output: {1, 3}


function sumSwap (arr1, arr2) {
    const sumA = arr1.reduce((acc, curr) => acc+curr, 0)
    const sumB = arr2.reduce((acc, curr) => acc+curr, 0)

    const difference = Math.abs(sumA - sumB)

    const m = new Map()
    for(const number of arr1) {
        const diff = Math.abs(number - difference)
        if (diff !== 0)
            m.set(diff, number)
    }
    
    for (const number of arr2) {
        if (m.has(number))
            return [m.get(number), number]
    }
}

console.log(sumSwap([4, 1, 2, 1, 1, 2], [3, 6, 3, 3]))