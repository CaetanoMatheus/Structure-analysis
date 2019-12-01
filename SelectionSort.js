class SelectionSort {
    constructor() {
        this.comparisons = 0
        this.changes = 0
        this.array = []
    }

    sort(unsortedArray) {
        this.array = unsortedArray.slice()
        for (let i = 0; i < this.array.length; i++) {
            let min = i
            for (let j = i + 1; j < this.array.length; j++) {
                this.comparisons++
                if (this.array[min] > this.array[j]) min = j
            }
            this.comparisons++
            if (min !== i) {
                this.changes++
                let tmp = this.array[i]
                this.array[i] = this.array[min]
                this.array[min] = tmp
            }
        }
        return this.array
    }
}
