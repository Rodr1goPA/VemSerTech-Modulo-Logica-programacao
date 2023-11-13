const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let count = null;
let numeroImput = 0;

while (true) {
    numeroImput = Number(prompt("Escolha um numero de 0 a 10:"))
    if (numeroImput === numeroAleatorio) {
        break;
    }
    numeroImput < numeroAleatorio?console.log("O numero digitado é menor"):console.log("O numero digitado é maior")
}
console.log("Vc acertou!!!")
