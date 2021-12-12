// Sorted Merge: You are given two sorted arrays, A and B, where A has a large enough buffer at the
// end to hold B. Write a method to merge B into A in sorted order.

const A = [1, 2, 3, 4, 5,-1,-1,33,40,70,0]
const B = [6, 7, 8, 9, 10, 11]

function sortedMerge (A, B, lastA, lastB) {
    let pos = A.length-1

    while (lastA >= 0 && lastB >= 0) {
        if (A[lastA] > B[lastB]) {
            A[pos] = A[lastA]
            lastA--
        } else {
            A[pos] = B[lastB]
            lastB--
        }

        pos--
    }
}

sortedMerge(A, B, 4, B.length-1)
console.log(A)