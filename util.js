module.exports.fillRandomArray = fillRandomArray;
module.exports.fillArray = fillArray;
module.exports.fillDescendingArray = fillDescendingArray;
module.exports.getRandomNumber = getRandomNumber;

function fillRandomArray(size) {
    let array = []
    for (let i = 0; i < size; i++) { array[i] = getRandomNumber(1, size) }
    return array
}

function fillArray(size) {
    let array = []
    for (let i = 0; i < size; i++) { array[i] = i + 1 }
    return array
}

function fillDescendingArray(size) {
    let array = []
    for (let i = 0; i < size; i++) { array[i] = size - (i + 1) }
    return array
}

function getRandomNumber(start, range) {
    let getRandom = Math.floor((Math.random() * range) + start)
    while (getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + start)
    }
    return getRandom
}
