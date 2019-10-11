function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    let middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    let left = unsortedArray.slice(0, middle);
    let right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

// Merge the two arrays: left and right
function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        comparisons++;
        if (left[leftIndex] < right[rightIndex]) {
            changes++;
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            changes++;
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}


const util = require('./util')

var comparisons = 0;
var changes = 0;

console.log('=== MERGE SORT 10 ^ 3 ===');
console.log('\nOrdenado:')
let data = [];
data = util.fillArray(1000);
data = mergeSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(1000)
data = mergeSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(1000)
data = mergeSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n---------------');
comparisons = 0;
changes = 0;

console.log('\n\n=== MERGE SORT 10 ^ 5 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(100000)
data = mergeSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(100000)
data = mergeSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(100000)
data = mergeSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n---------------');
comparisons = 0;
changes = 0;

console.log('\n\n=== MERGE SORT 10 ^ 7 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(10000000)
data = mergeSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(10000000)
data = mergeSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(10000000)
data = mergeSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);
