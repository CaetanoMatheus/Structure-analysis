function quickSort(array) {
    //Valida se o array tem mais de uma posição.
    if (array.length <= 1) {
        return array;
    }

    //Define o pivô como a primeira posiçao do vetor.
    let pivot = array[0];

    //Cria os vetores da direra e esquerda (ainda não popula).
    let left = [];
    let right = [];

    //Separa os valores menores que o pivô no array da esquerda e os valores
    //maiores que o pivô no array da direita.
    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        comparisons++;
        changes++;
    }

    //Concatena os array da esquerda, pivô, e array da direita respectivamente.
    return quickSort(left).concat(pivot, quickSort(right));
};

const util = require('./util')

var comparisons = 0;
var changes = 0;

console.log('=== QUICK SORT 10 ^ 3 ===');
console.log('\nOrdenado:')
let data = [];
data = util.fillArray(1000);
data = quickSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(1000)
data = quickSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(1000)
data = quickSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n---------------');
comparisons = 0;
changes = 0;

console.log('\n\n=== QUICK SORT 10 ^ 5 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(100000)
data = quickSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(100000)
data = quickSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(100000)
data = quickSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n---------------');
comparisons = 0;
changes = 0;

console.log('\n\n=== QUICK SORT 10 ^ 7 ===');
console.log('\nOrdenado:')
data = [];
data = util.fillArray(10000000)
data = quickSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nOrdenado Inverso:');
data = [];
data = util.fillDescendingArray(10000000)
data = quickSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);

console.log('\n\nDesordenado:');
data = [];
data = util.fillRandomArray(10000000)
data = quickSort(data);
console.log('Comparação: ' + comparisons);
console.log('Trocas: ' + changes);
