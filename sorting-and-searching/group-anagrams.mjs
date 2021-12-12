// Group Anagrams: Write a method to sort an array ot strings so that all tne anagrnms are next to
// each other.

const words = ['car', 'arc', 'acre', 'race', 'care', 'earth', 'heart']

function groupAnagrams (words) {
    const map = new Map()

    for (const word of words) {
        const key = word.split('').sort().join('')
        if (!map.has(key))
            map.set(key, [])
        map.get(key).push(word)
    }

    const response = []
    for (const value of map.values())
        response.push(...value)
    return response
}

console.log(groupAnagrams(words))