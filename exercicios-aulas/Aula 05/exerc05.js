const numeroAleatorio = 20;
let count = 0;
let numero = null;
let verificacao = false;

while(count < 5){
    numero = Number(prompt("Digite um numero: "))
    count++;
    console.log(count)
    if(numero === numeroAleatorio){
        verificacao = true
        break;
    }
    if (numero < numeroAleatorio) {
        console.log("Dica: o numero digitado é menor que o numero soteador. Tente novamente")
    }else{
        console.log("Dica: o numero digitado é maior que o numero soteador. Tente novamente")
    }
}
verificacao == true?console.log("Paraéns você acertou o numero sorteado!!!"):console.log("Não foi dessa vez!!!")