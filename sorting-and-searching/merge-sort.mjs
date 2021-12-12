function mergeSort (array) {
    const helper = Array(array.length)
    _mergeSort(array, helper, 0, array.length-1)
}

function _mergeSort(array, helper, low, high) {
    if (low < high) {
        const middle = Math.floor((low + high) / 2)
        _mergeSort(array, helper, low, middle)
        _mergeSort(array, helper, middle+1, high)
        merge(array, helper, low, middle, high)
    }
}

function merge (array, helper, low, middle, high) {
    for (let i = low; i <= high; i++)
        helper[i] = array[i]

    let helperLeft = low
    let helperRight = middle+1
    let current = low

    while (helperLeft <= middle && helperRight <= high) {
        if (helper[helperLeft] <= helper[helperRight]) {
            array[current] = helper[helperLeft]
            helperLeft++
        } else {
            array[current] = helper[helperRight]
            helperRight++
        }
        current++
    }

    const remaining = middle - helperLeft
    for (let i = 0; i <= remaining; i++)
        array[current+i] = helper[helperLeft+i]
}

const arr = [8,6,7,1,5,9,3,4,2]
mergeSort(arr)
console.log(arr)