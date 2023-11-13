let numero = Number(prompt("Digite um numero"))
let cont = 2;
let isPrimo = true;
while(numero > cont ){
    if (numero % cont === 0) {
        isPrimo = false;
        break;
    }
    cont ++;
}
isPrimo == true?console.log(`O numero ${numero} é primo!`):console.log(`O numero ${numero} não é primo!`)