// Shuffle: Write a method to shuffle a deck of cards. It must be a perfect shuffle-in other words, each
// of the 52! permutations of the deck has to be equally likely. Assume that you are given a random
// number generator which is perfect.

function rand (low, high) {
    return low + Math.floor(Math.random() * (high - low + 1))
}

function shuffle (cards) {
    return _shuffle(cards, cards.length-1)
}

function _shuffle (cards, i) {
    if (i === 0)
        return cards

    _shuffle(cards, i-1)
     
    const k = rand(0, i)

    const temp = cards[k]
    cards[k] = cards[i]
    cards[i] = temp

    return cards
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))