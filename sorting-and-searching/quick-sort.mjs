function quickSort (arr) {
    _quickSort(arr, 0, arr.length-1)
}

function _quickSort (arr, left, right) {
    if (left < right) {
        const index = partition(arr, left, right)
        _quickSort(arr, left, index-1)
        _quickSort(arr, index+1, right)
    }
}

function partition (arr, left, right) {
    const pivot = arr[right]
    let i = left-1

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++
            swap(arr, i, j)
        }
    }

    i++

    swap(arr, i, right)
    return i
}

function swap (arr, left, right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

const arr = [8, 6, 1, 3, 5, 9, 2, 4, 7]
/**
 * i=6
 * [6l, 1, 3, 5, 2, 4, 7, 9j, 8*r]
 */
quickSort(arr)
console.log(arr)