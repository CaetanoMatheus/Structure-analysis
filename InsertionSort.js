function insertionSort(inputArr) {
    var comparisons = 0;
    var changes = 0;
    for (let i = 1; i < inputArr.length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            comparisons++;
            changes++;
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        comparisons++;
        inputArr[j + 1] = key;
    }
    return "Changes: " + changes + " | Comparisons: " + comparisons;
};

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

function bubbleSort(inputArr) {
    let comparisons = 0;
    let changes = 0;
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr.length; j++) {
            comparisons++;
            if (inputArr[j] > inputArr[j + 1]) {
                changes++;
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return "Changes: " + changes + " | Comparisons: " + comparisons;
};

const util = require('./util')


console.log('=== INSERTION SORT 10 ^ 3 ===');
console.log('\nOrdenado:')
let data = [];
data = util.fillArray(1000)
console.log(insertionSort(data));

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(1000)
console.log(insertionSort(data));

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(1000)
console.log(insertionSort(data));

console.log('\n---------------');

console.log('\n\n=== INSERTION SORT 10 ^ 5 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(100000)
console.log(insertionSort(data));

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(100000)
console.log(insertionSort(data));

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(100000)
console.log(insertionSort(data));

console.log('\n---------------');

console.log('\n\n=== INSERTION SORT 10 ^ 7 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(10000000)
console.log(insertionSort(data));

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(10000000)
console.log(insertionSort(data));

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(10000000)
console.log(insertionSort(data));
