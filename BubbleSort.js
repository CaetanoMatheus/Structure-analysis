class BubbleSort {
    constructor() {
        this.comparisons = 0
        this.changes = 0
        this.array = []
    }

    sort(unsortedArray)  {
        let array = unsortedArray.slice()
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                this.comparisons++
                if (array[j] > array[j + 1]) {
                    this.changes++
                    let aux = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = aux
                }
            }
        }
        this.array = array
    }
}

module.exports = BubbleSort
