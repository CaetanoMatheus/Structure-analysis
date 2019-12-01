class BubbleSort {
    constructor() {
        this.comparisons = 0
        this.changes = 0
        this.array = []
    }

    sort(unsortedArray)  {
        this.array = unsortedArray.slice()
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length; j++) {
                this.comparisons++
                if (this.array[j] > this.array[j + 1]) {
                    this.changes++
                    let aux = this.array[j]
                    this.array[j] = this.array[j + 1]
                    this.array[j + 1] = aux
                }
            }
        }
        return this.array
    }
}
