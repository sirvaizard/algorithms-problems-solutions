// Insertion: You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a method
// to insert Minto N such that M starts at bit j and ends at bit i. You can assume that the bits j through
// i have enough space to fit all of M. That is, if M = 10011, you can assume that there are at least 5
// bits between j and i. You would not, for example, have j = 3 and i = 2, because M could not fully
// fit between bit 3 and bit 2.
// EXAMPLE
// Input: N = 10000000000 (1024), M = 10011 (19), i = 2, j= 6
// Output: N = 10001001100 (1100)

// 10000000000
// 10001001100
// 00001111100
// 00000011111

function insert (n, m, i, j) {
    const length = j - i
    let mask = 1
    for (let k = 0; k < length; k++) {
        mask <<= 1
        mask += 1
    }
    mask <<= i
    mask = ~mask

    n &= mask

    m <<= i
    n |= m

    console.log(toBinary(n))
}

function toBinary (number) {
    return (number >>> 0).toString(2)
}

insert(1024, 19, 2, 6)
