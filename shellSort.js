function shellSort(arr) {
    let increment = arr.length / 2; // increment is arbitrary
    while (increment >= 1) {
        for (let startIndex = 0; startIndex < increment; startIndex++) {
            insertionSort(arr, startIndex, increment);
        }
        increment = Math.floor(increment / 2);
    }
}

function insertionSort(arr, startIndex, increment) {
    for (let i = startIndex; i < increment; i++) {
        let sortedListLastIndex = i;
        for (let j = i + increment; j < arr.length; j += increment) {
            const current = arr[j];
            let currentIndex = j;
            let swapIndex = sortedListLastIndex;
            while (current < arr[swapIndex] && swapIndex >= 0) {
                comparisons++;
                swap(arr, currentIndex, swapIndex);
                currentIndex -= increment;
                swapIndex -= increment;
            }
            comparisons++;
            sortedListLastIndex += increment;
        }
    }
}

function swap(arr, i, j) {
    changes++;
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


const util = require('./util')

var comparisons = 0;
var changes = 0;

console.log('=== SHELL SORT 10 ^ 3 ===');
console.log('\nOrdenado:')
let data = [];
data = util.fillArray(1000);
data = shellSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(1000)
data = shellSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(1000)
data = shellSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n---------------');
comparisons = 0;
changes = 0;

console.log('\n\n=== SHELL SORT 10 ^ 5 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(100000)
data = shellSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(100000)
data = shellSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(100000)
data = shellSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n---------------');
comparisons = 0;
changes = 0;

console.log('\n\n=== SHELL SORT 10 ^ 7 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(10000000)
data = shellSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(10000000)
data = shellSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(10000000)
data = shellSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);
