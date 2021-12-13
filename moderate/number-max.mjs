// Number Max: Write a method that finds the maximum of two numbers. You should not use if-else
// or any other comparison operator.

function numberMax (a, b) {
    return Math.floor((a + b + Math.abs(a - b)) / 2)
}

console.log(numberMax(-32, 102))