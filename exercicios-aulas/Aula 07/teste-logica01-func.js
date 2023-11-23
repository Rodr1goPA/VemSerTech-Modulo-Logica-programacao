let arrayNumeros =  []
let somaMaxima = null;
let somaMinima = null;


function ordenadorNumeros(arra) {
    for(i = 0 ; i<5 ; i++){
        let inputNumero = Number(prompt("Digite um numero:"))
        arrayNumeros.push(inputNumero)
    }
    for(let count = 0 ; count < arra.length ; count ++){ 
        for(let i = 0 ; i < arra.length ; i ++){
            if(arra[i] > arra[i + 1]){
                let numero = arra[i]
                arra[i] = arra[i + 1]
                arra[i + 1] = numero
            }
        }
    }
    return arra
}
let resultadoOrdenado = ordenadorNumeros(arrayNumeros)

function somaMaximaF(arrayOrdenado) {
    for(i = 1; i <arrayOrdenado.length ; i++){
        somaMaxima += arrayOrdenado[i]
    }
    return somaMaxima
}
somaMaximaF(resultadoOrdenado)

function somaMinimaF(arrayOrdenado) {
    for(i = 0; i < arrayOrdenado.length - 1 ; i++){
        somaMinima +=arrayOrdenado[i]
    }
    return somaMinima
}
somaMinimaF(resultadoOrdenado)

console.log(somaMaxima , somaMinima)

