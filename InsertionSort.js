class InsertionSort {
    constructor() {
        this.comparisons = 0
        this.changes = 0
        this.array = []
    }

    sort(unsortedArray) {
        this.array = unsortedArray.slice()
        for (let i = 1; i < this.array.length; i++) {
            let key = this.array[i]
            let j = i - 1
            while (j >= 0 && this.array[j] > key) {
                this.comparisons++
                this.changes++
                this.array[j + 1] = this.array[j];
                j = j - 1
            }
            this.comparisons++
            this.array[j + 1] = key
        }
        return this.array
    }
}

let arr = [4,3,2,1,5]
let c = new InsertionSort()
arr = c.sort(arr)
console.log(arr)
console.log(c.array)
console.log(c.changes)
console.log(c.comparisons)



