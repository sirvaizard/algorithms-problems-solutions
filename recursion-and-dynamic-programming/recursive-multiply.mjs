// Recursive Multiply: Write a recursive function to multiply two positive integers without using
// the * operator (or / operator). You can use addition, subtraction, and bit shifting, but you should
// minimize the number of those operations.

function recursiveMultiply (a, b) {
    if (b === 0 || a === 0)
        return 0
    if (b === 1)
        return a

    return a + recursiveMultiply(a, b-1)
}

console.log(recursiveMultiply(5, 10))