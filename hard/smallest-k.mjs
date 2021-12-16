// Smallest K: Design an algorithm to find the smallest K numbers in an array.

class Heap {
    constructor (arr) {
        this.numbers = [...arr]
        this.length = arr.length

        this.buildMaxHeap()
    }

    parent (i) {
        return Math.floor((i-2) / 2)
    }

    left (i) {
        return 2*i + 1
    }

    right (i) {
        return (i+1) * 2 
    }

    maxHeapify (i) {
        const left = this.left(i)
        const right = this.right(i)

        let max = i

        if (left < this.length && this.numbers[left] > this.numbers[max])
            max = left

        if (right < this.length && this.numbers[right] > this.numbers[max])
            max = right

        if (max !== i) {
            const temp = this.numbers[i]
            this.numbers[i] = this.numbers[max]
            this.numbers[max] = temp

            this.maxHeapify(max)
        }
    }

    buildMaxHeap () {
        for (let i = Math.floor(this.length / 2); i >= 0; i--)
            this.maxHeapify(i)
    }

    kthSmallestElements (k) {
        const { length } = this

        for (let i = 0; i < length-k; i++) {
            const temp = this.numbers[0]
            this.numbers[0] = this.numbers[this.length-1]
            this.numbers[this.length-1] = temp
            this.length--
            this.maxHeapify(0)
        }

        return this.numbers.slice(0, k)
    }
}

const input = [9, 4, 6, 7, 2, 5, 1, 8, 3, 10]

const heap = new Heap(input)

console.log(heap.kthSmallestElements(5))

/**
 *                              i
 *              pl              p
 * 4l, 2, 1, 3, 5, 10, 6, 8, 7, 9r
 */
function partition (numbers, left, right) {
    let pivot = numbers[right]
    let pivotLocation = left
    
    for (let i = left; i <= right; i++) {
        if (numbers[i] < pivot) {
            swap(numbers, i, pivotLocation)
            pivotLocation++
        }
    }

    swap(numbers, right, pivotLocation)

    return pivotLocation
}

function kthSmallest (numbers, left, right, k) {
    let pivot = partition(numbers, left, right)

    if (pivot === k-1)
        return numbers

    else if (pivot < k-1)
        return kthSmallest(numbers, pivot+1, right, k)
    else
        return kthSmallest(numbers, left, pivot-1, k)
}

function swap (numbers, i, j) {
    const temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
}

const numbers = kthSmallest([...input], 0, input.length-1, 5)
console.log(numbers.slice(0, 5))