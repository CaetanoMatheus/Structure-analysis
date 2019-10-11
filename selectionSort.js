function selectionSort(arr) {
    let comparisons = 0;
    let changes = 0;
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            comparisons++;
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        comparisons++;
        if (min !== i) {
            changes++;
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return "Changes: " + changes + " | Comparisons: " + comparisons;
}

const util = require('./util')


console.log('=== SELECTION SORT 10 ^ 3 ===');
console.log('\nOrdenado:')
let data = [];
data = util.fillArray(1000)
console.log(selectionSort(data));

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(1000)
console.log(selectionSort(data));

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(1000)
console.log(selectionSort(data));

console.log('\n---------------');

console.log('\n\n=== SELECTION SORT 10 ^ 5 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(100000)
console.log(selectionSort(data));

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(100000)
console.log(selectionSort(data));

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(100000)
console.log(selectionSort(data));

console.log('\n---------------');

console.log('\n\n=== SELECTION SORT 10 ^ 7 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(10000000)
console.log(selectionSort(data));

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(10000000)
console.log(selectionSort(data));

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(10000000)
console.log(selectionSort(data));
