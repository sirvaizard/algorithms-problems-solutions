// Baby Names: Each year, the government releases a list of the 10,000 most common baby names
// and their frequencies (the number of babies with that name). The only problem with this is that
// some names have multiple spellings. For example, "John" and ''.Jon" are essentially the same name
// but would be listed separately in the list. Given two lists, one of names/frequencies and the other
// of pairs of equivalent names, write an algorithm to print a new list of the true frequency of each
// name. Note that if John and Jon are synonyms, and Jon and Johnny are synonyms, then John and
// Johnny are synonyms. (It is both transitive and symmetric.) In the final list, any name can be used
// as the "real" name.
// EXAMPLE
// Input:
// Names: John (15), Jon (12), Chris (13), Kris (4), Christopher (19)
// Synonyms: (Jon, John), (John, Johnny), (Chris, Kris), (Chris, Christopher)
// Output: John (27), Kris (36)

const names = [
    { name: 'John', count: 15 }, { name: 'Jon', count: 12 },
    { name: 'Chris', count: 13 },{ name: 'Kris', count: 4 }, { name: 'Christopher', count: 19 }]

const synonyms = [['Jon', 'John'], ['John', 'Johnny'], ['Chris', 'Kris'], ['Chris', 'Christopher']]

// O(n+m+k)
function babyNames (names, synonyms) {
    const namesToCount = new Map()
    const uniqueNames = []

    // O(n) | n = number of synonyms tuples
    for (const synonym of synonyms) {
        const [name1, name2] = synonym

        if (namesToCount.has(name1)) {
            const count = namesToCount.get(name1)
            namesToCount.set(name2, count)
        } else if (namesToCount.has(name2)) {
            const count = namesToCount.get(name2)
            namesToCount.set(name1, count)
        } else {
            const count = { count: 0 }

            namesToCount.set(name1, count)
            namesToCount.set(name2, count)

            uniqueNames.push(name1)
        }
    }
    
    // O(m) | m = number of names
    for (const person of names) {
        const countObj = namesToCount.get(person.name)
        countObj.count += person.count
    }

    // O(k) | k = number of unique names
    return uniqueNames.map(name => ({ name, count: namesToCount.get(name)}))
}

console.log(babyNames(names, synonyms))