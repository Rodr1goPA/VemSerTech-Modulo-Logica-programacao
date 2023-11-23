let arrayNumeros =  [5,1,6,3,9]
let somaMaxima = null;
let somaMinima = null;

for(let count = 0 ; count < arrayNumeros.length ; count ++){ 
    for(let i = 0 ; i < arrayNumeros.length ; i ++){
        if(arrayNumeros[i] > arrayNumeros[i + 1]){
            let numero = arrayNumeros[i]
            arrayNumeros[i] = arrayNumeros[i + 1]
            arrayNumeros[i + 1] = numero
        }
    }
}

for(i = 1; i <arrayNumeros.length ; i++){
    somaMaxima += arrayNumeros[i]
}
for(i = 0; i < arrayNumeros.length - 1 ; i++){
    somaMinima +=arrayNumeros[i]
}
console.log(somaMaxima, somaMinima)
