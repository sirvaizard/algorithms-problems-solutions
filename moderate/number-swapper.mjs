// Number Swapper: Write a function to swap a number in place (that is, without temporary variables).

function numberSwapper (a, b) {
    a = a+b
    b = a-b
    a = a-b

    console.log(a, b)
}

numberSwapper(-9, 6)

function numberSwapperBitwise (a, b) {
    a = a^b
    b = a^b
    a = a^b

    console.log(a, b)
}

numberSwapperBitwise(-9, 6)