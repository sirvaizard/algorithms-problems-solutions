// Word Transformer: Given two words of equal length that are in a dictionary, write a method to
// transform one word into another word by changing only one letter at a time. The new word you get
// in each step must be in the dictionary.
// EXAMPLE
// Input: DAMP, LIKE
// Output: DAMP-> LAMP-> LIMP-> LIME-> LIKE

function wordTransformer (start, stop, words) {
    const dict = new Set(words.map(word => word.toLowerCase()))
    const visited = new Set()

    return transform(visited, start, stop, dict)
}

function transform (visited, startWord, stopWord, dictionary) {
    if (startWord === stopWord) {
        return [startWord]
    } else if(visited.has(startWord) || !dictionary.has(startWord)) {
        return []
    }

    visited.add(startWord)

    const words = wordsOneWay(startWord)

    for (const word of words) {
        const path = transform(visited, word, stopWord, dictionary)
        if (path.length) {
            path.unshift(startWord)
            return path
        }
    }

    return []
}

function wordsOneWay (word) {
    const words = []
    for (let i = 0; i < word.length; i++) {
        for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
            const w = word.slice(0, i) + String.fromCharCode(c) + word.slice(i+1)
            words.push(w)
        }
    }

    return words
}

const words = ['DAMP', 'LAMP', 'LIMP', 'LIME', 'LIKE']

console.log(wordTransformer('damp', 'like', words))


// With wildcard
function wordTransformerWildcard (start, stop, words) {
    const wildcardToWordList = createWildcardToWordMap(words)
    const visited = new Set()

    return transformWildcard(visited, start, stop, wildcardToWordList)
}

function transformWildcard (visited, start, stop, wildcardToWordList) {
    if (start === stop) {
        return [start]
    } else if (visited.has(start)) {
        return []
    }

    visited.add(start)
    const words = getValidLinkedWords(start, wildcardToWordList)

    for (const word of words) {
        const path = transformWildcard(visited, word, stop, wildcardToWordList)
        if (path.length) {
            path.unshift(start)
            return path
        }
    }

    return []
}

function getValidLinkedWords (word, wildcardToWords) {
    const wildcards = getWildcardsRoots(word)
    const linkedWords = []

    for (const wildcard of wildcards) {
        const words = wildcardToWords.get(wildcard)
        
        for (const linkedWord of words) {
            if (linkedWord !== word)
                linkedWords.push(linkedWord)
        }
    }
}

function createWildcardToWordMap (words) {
    const wildcardToWords = new Map()

    for (const word of words) {
        const linked = getWildcardsRoots(word)

        for (const linkedWord of linked) {
            if (!wildcardToWords.has(linkedWord))
                wildcardToWords.set(linkedWord, [])
            wildcardToWords.get(linkedWord).push(word)
        }
    }

    return wildcardToWords
}

function getWildcardsRoots (word) {
    const words = []

    for (let i = 0; i < word.length; i++) {
        const w = word.slice(0, i) + '_' + word.slice(i+1)
        words.push(w)
    }

    return words
}

console.log(wordTransformerWildcard('damp', 'like', words))
