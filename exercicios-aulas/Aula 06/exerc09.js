let arrayNumeros = [3,2,1,6,78,3,5,88,99,0]

for(let count = 0 ; count < arrayNumeros.length ; count ++){ 
    for(let i = 0 ; i < arrayNumeros.length ; i ++){
        if(arrayNumeros[i] > arrayNumeros[i + 1]){
            let numero = arrayNumeros[i]
            arrayNumeros[i] = arrayNumeros[i + 1]
            arrayNumeros[i + 1] = numero
        }
    }
}console.log(arrayNumeros)





