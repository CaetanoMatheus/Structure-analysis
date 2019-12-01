class QuickSort {
    constructor() {
        this.comparisons = 0
        this.changes = 0
        this.array = []
    }

    sort(unsortedArray) {
        this.array = unsortedArray.slice()
        //Valida se o this.array tem mais de uma posição.
        if (this.array.length <= 1) return this.array

        //Define o pivô como a primeira posiçao do vetor.
        let pivot = this.array[0]

        //Cria os vetores da direra e esquerda (ainda não popula).
        let left = []
        let right = []
    
        //Separa os valores menores que o pivô no this.array da esquerda e os valores
        //maiores que o pivô no this.array da direita.
        for (let i = 1; i < this.array.length; i++) {
            this.array[i] < pivot ? left.push(this.array[i]) : right.push(this.array[i])
            this.comparisons++
            this.changes++
        }
    
        //Concatena os this.array da esquerda, pivô, e this.array da direita respectivamente.
        return this.sort(left)
            .concat(pivot, this.sort(right))
    }
}
