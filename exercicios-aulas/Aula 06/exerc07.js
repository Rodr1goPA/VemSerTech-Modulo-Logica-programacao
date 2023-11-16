let qtdDados = 10;
let arrayNumeros = [];
let count = null;

for(count = 0 ; count < qtdDados ; count++){
    if(count <= 1){
        arrayNumeros.push(1)
    }else{
        const soma = arrayNumeros[count -1] + arrayNumeros[count - 2]
        arrayNumeros.push(soma)
    }
}

console.log(arrayNumeros)