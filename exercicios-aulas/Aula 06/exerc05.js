let numero = {
    valor1: 20,
    valor2: 35,
    valor3: 10
}
let soma = null;
for(propriedade in numero){
    soma = numero[propriedade] + soma;
}console.log(`A soma dos valores (${numero.valor1},${numero.valor2},${numero.valor3}) é igual: ${soma}`)