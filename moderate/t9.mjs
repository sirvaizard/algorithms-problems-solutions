// T9: On old cell phones, users typed on a numeric keypad and the phone would provide a list of words
// that matched these numbers. Each digit mapped to a set of O - 4 letters. Implement an algorithm
// to return a list of matching words, given a sequence of digits. You are provided a list of valid words
// (provided in whatever data structure you'd like). The mapping is shown in the diagram below:
//
//    1   2   3
//       abc def
//    4   5   6
//   ghi jkl mno
//    7   8   9
//  pqrs tuv wxyz
//

class Node {
    constructor () {
        this.value = null
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
}

const words = ['tree', 'used', 'card']

const trie = new Node()
for (const word of words)
    trie.put(word, word)

const numbersMap = new Map()
    .set(2, ['a', 'b', 'c'])
    .set(3, ['d', 'e', 'f'])
    .set(4, ['g', 'h', 'i'])
    .set(5, ['j', 'k', 'l'])
    .set(6, ['m', 'n', 'o'])
    .set(7, ['p', 'q', 'r', 's'])
    .set(8, ['t', 'u', 'v'])
    .set(9, ['w', 'x', 'y', 'z'])

function t9 (trie, numbers, words=[]) {
    if (numbers.length === 0)
        return

    const letters = numbersMap.get(numbers[0])

    for (const letter of letters) {
        if (numbers.length === 1) {
            const has = trie.children.get(letter)
            if (has && has.value)
                words.push(has.value)
        } else {
            if (trie.children.has(letter)) {
                t9(trie.children.get(letter), numbers.slice(1, numbers.length), words)
            }
        }
    }

    return words
}
console.log(t9(trie, [8, 7, 3, 3]))

const charToNumber = new Map()
for (const [number, letters] of numbersMap.entries())
    for (const letter of letters)
        charToNumber.set(letter, number)

const numbersToWords = new Map()

words.forEach(word => {
    const number = word.split('').map(letter => charToNumber.get(letter)).join('')
    if (!numbersToWords.has(number))
        numbersToWords.set(number, [])
    numbersToWords.get(number).push(word)
}) 

function t9Mapped (number) {
    return numbersToWords.get(number)
}

console.log(t9Mapped('8733'))