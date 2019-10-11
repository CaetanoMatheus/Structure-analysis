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

function fillRandomArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array[i] = getRandomNumber(1, size);
    }
    return array;
}

function fillArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array[i] = i + 1;
    }
    return array;
}

function fillDescendingArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array[i] = size - (i + 1);
    }
    return array;
}

function getRandomNumber(start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + start);
    }
    return getRandom;
}

const util = require('./util')


console.log('=== BUBBLE SORT 10 ^ 3 ===');
console.log('\nOrdenado:')
let data = [];
data = util.fillArray(1000)
console.log(bubbleSort(data));

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(1000)
console.log(bubbleSort(data));

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(1000)
console.log(bubbleSort(data));

console.log('\n---------------');

console.log('\n\n=== BUBBLE SORT 10 ^ 5 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(100000)
console.log(bubbleSort(data));

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(100000)
console.log(bubbleSort(data));

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(100000)
console.log(bubbleSort(data));

console.log('\n---------------');

console.log('\n\n=== BUBBLE SORT 10 ^ 7 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(10000000)
console.log(bubbleSort(data));

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(10000000)
console.log(bubbleSort(data));

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(10000000)
console.log(bubbleSort(data));
