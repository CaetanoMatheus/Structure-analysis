class ShellSort {
    constructor() {
        this.comparisons = 0
        this.changes = 0
        this.array = []
    }
    sort(unsorteArray) {
        this.array = unsorteArray.slice()
        let increment = this.array.length / 2 // increment is arbitrary
        while (increment >= 1) {
            for (let startIndex = 0; startIndex < increment; startIndex++) {
                this.insertionSort(this.array, startIndex, increment)
            }
            increment = Math.floor(increment / 2)
        }
        return this.array
    }
    
    insertionSort(array, startIndex, increment) {
        for (let i = startIndex; i < increment; i++) {
            let sortedListLastIndex = i
            for (let j = i + increment; j < array.length; j += increment) {
                let current = array[j]
                let currentIndex = j
                let swapIndex = sortedListLastIndex
                while (current < array[swapIndex] && swapIndex >= 0) {
                    this.comparisons++
                    this.swap(array, currentIndex, swapIndex)
                    currentIndex -= increment
                    swapIndex -= increment
                }
                this.comparisons++
                sortedListLastIndex += increment
            }
        }
    }
    
    swap(array, i, j) {
        this.changes++
        let aux = array[i]
        array[i] = array[j]
        array[j] = aux
    }    
}
