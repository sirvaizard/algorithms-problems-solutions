// Coins: Given an infinite number of quarters (25 cents), dimes (1O cents), nickels (5 cents), and
// pennies (1 cent), write code to calculate the number of ways of representing n cents.

function makeChange (n) {
    const denoms = [25, 10, 5, 1]
    
    return makeChangeAux(n, denoms, 0)
}

function makeChangeAux (amount, denoms, index) {
    if (index >= denoms.length - 1)
        return 1

    const denomAmount = denoms[index]

    let ways = 0

    for (let i = 0; i * denomAmount <= amount; i++) {
        const amountRemaining = amount - i*denomAmount
        ways += makeChangeAux(amountRemaining, denoms, index+1)
    }

    return ways
}

console.log(makeChange(100))