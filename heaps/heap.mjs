class Heap {
    constructor (value) {
        if (Array.isArray(value)) {
            this.data = [...value]
            this.size = value.length
        } else {
            this.data = []
            this.size = 0
        }
    }

    parent (i) {
        return Math.floor((i-1) / 2)
    }
    
    left (i) {
        return (i << 1) + 1
    }
    
    right (i) {
        return (i+1) << 1
    }
    
    maxHeapify (i) {
        const left = this.left(i)
        const right = this.right(i)
        
        let bigger = i
        if (left < this.size && this.data[left] > this.data[i])
            bigger = left
        if (right < this.size && this.data[right] > this.data[bigger])
            bigger = right
        
        if (bigger !== i) {
            const temp = this.data[i]
            this.data[i] = this.data[bigger]
            this.data[bigger] = temp

            this.maxHeapify(bigger)
        }
    }

    buildMaxHeap () {
        for (let i = Math.floor(this.size / 2); i >= 0; i--)
            this.maxHeapify(i)
    }
}
