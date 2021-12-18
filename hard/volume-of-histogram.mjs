// Volume of Histogram: Imagine a histogram (bar graph). Design an algorithm to compute the
// volume of water it could hold if someone poured water across the top. You can assume that each
// histogram bar has width 1.
// EXAMPLE
// Input{0, 0 , 4, 0, 0, 6, 0, 0, 3, 0, 5, 0 , 1, 0, 0, 0}

// O(n²) solution
function computeHistogramVolume (histogram) {
    const start = 0
    const end = histogram.length-1

    const max = findIndexOfMax(histogram, start, end)
    const leftVolumne = subGraphVolume(histogram, start, max, true)
    const rightVolume = subGraphVolume(histogram, max, end, false)

    return leftVolumne + rightVolume
}

function subGraphVolume (histogram, start, end, isLeft) {
    if (start >= end)
        return 0

    let sum = 0
    if (isLeft) {
        const max = findIndexOfMax(histogram, start, end-1)
        sum += borderedVolume(histogram, max, end)
        sum += subGraphVolume(histogram, start, max, isLeft)
    } else {
        const max = findIndexOfMax(histogram, start+1, end)
        sum += borderedVolume(histogram, start, max)
        sum += subGraphVolume(histogram, max, end, isLeft)
    }

    return sum
}

function borderedVolume (histogram, start, end) {
    if (start >= end)
        return 0

    const min = Math.min(histogram[start], histogram[end])

    let sum = 0
    for (let i = start+1; i < end; i++)
        sum += min - histogram[i]

    return sum
}

function findIndexOfMax (histogram, start, end) {
    let indexOfMax = start
    for (let i = start; i < end; i++)
        if (histogram[i] > histogram[indexOfMax])
            indexOfMax = i

    return indexOfMax
}

const input = [0, 0 , 4, 0, 0, 6, 0, 0, 3, 0, 5, 0 , 1, 0, 0, 0]

console.log(computeHistogramVolume(input))


// O(n) solution
function computeHistogramVolume2 (histogram) {
    const start = 0
    const end = histogram.length-1

    const histogramData = createHistogramData(histogram)

    const max = histogramData[0].rightMaxIndex
    const leftVolume = subGraphVolume2 (histogramData, start, max, true)
    const rightVolume = subGraphVolume2 (histogramData, max, end, false)
    return leftVolume + rightVolume
}

function subGraphVolume2 (histogram, start, end, isLeft) {
    if (start >= end)
        return 0

    let sum = 0
    if (isLeft) {
        const max = histogram[end-1].leftMaxIndex
        sum += borderedVolume2(histogram, max, end)
        sum += subGraphVolume2(histogram, start, max, isLeft)
    } else {
        const max = histogram[start+1].rightMaxIndex
        sum += borderedVolume2(histogram, start, max)
        sum += subGraphVolume2(histogram, max, end, isLeft)
    }

    return sum
}

function borderedVolume2 (histogram, start, end) {
    if (start >= end)
        return 0

    const min = Math.min(histogram[start].height, histogram[end].height)

    let sum = 0
    for (let i = start+1; i < end; i++)
        sum += min - histogram[i].height

    return sum
}

function createHistogramData (histogram) {
    const histogramData = []

    let maxIndex = 0
    for (let i = 0; i < histogram.length; i++) {
        if (histogram[maxIndex] < histogram[i])
            maxIndex = i
        histogramData.push({ height: histogram[i], leftMaxIndex: maxIndex, rightMaxIndex: -1})
    }

    maxIndex = histogram.length-1
    for (let i = histogram.length-1; i >=0; i--) {
        if (histogram[maxIndex] < histogram[i])
            maxIndex = i

        histogramData[i].rightMaxIndex = maxIndex
    }

    return histogramData
}

console.log(computeHistogramVolume2(input))


// O(n) simplified

function computeHistogramVolume3 (histogram) {
    const data = createHistogramData(histogram)

    let sum = 0
    for (let i = 0; i < histogram.length; i++) {
        const min = Math.min(histogram[data[i].leftMaxIndex], histogram[data[i].rightMaxIndex])
        sum += min - histogram[i]
    }

    return sum
}

console.log(computeHistogramVolume3(input))
