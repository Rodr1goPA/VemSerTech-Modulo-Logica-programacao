let resultadoPar = 0;
let resultadoImpar = 0;
let numero;
while (true) {
    numero = Number(prompt("Digite um numero"))
    if (numero === 0) {
        break;
    }
    if (numero % 2 == 0) {
        resultadoPar += numero;
    }else{
        resultadoImpar += numero;
    }
}
console.log(`A soma dos numeros Pares são ${resultadoPar}`)
console.log(`A soma dos numeros Impares são ${resultadoImpar}`)