class MergeSort {
    constructor() {
        this.comparisons = 0
        this.changes = 0
        this.array
    }

    sort(unsorteArray) {
        this.array = unsorteArray.slice()
        // No need to sort the array if the array only has one element or empty
        if (this.array.length <= 1) {
            return this.array
        }
        // In order to divide the array in half, we need to figure out the middle
        let middle = Math.floor(this.array.length / 2)
    
        // This is where we will be dividing the array into left and right
        let left = this.array.slice(0, middle)
        let right = this.array.slice(middle)
    
        // Using recursion to combine the left and right
        return this.merge(
            this.sort(left), this.sort(right)
        )
    }

    // Merge the two arrays: left and right
    merge(left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0

        // We will concatenate values into the resultArray in order
        while (leftIndex < left.length && rightIndex < right.length) {
            this.comparisons++
            if (left[leftIndex] < right[rightIndex]) {
                this.changes++
                resultArray.push(left[leftIndex])
                leftIndex++ // move left array cursor
            } else {
                this.changes++
                resultArray.push(right[rightIndex])
                rightIndex++ // move right array cursor
            }
        }

        // We need to concat here because there will be one element remaining
        // from either left OR the right
        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex))
    }
}
