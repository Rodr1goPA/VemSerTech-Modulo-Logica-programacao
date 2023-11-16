let input = Number(prompt("Digite a quantidade de dados para jogar: "))
let dados = []
let soma = null;

for(count = 0; count < input ; count ++){
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    dados.push(numeroAleatorio)
    soma += numeroAleatorio;
    console.log(`dado ${count + 1} : ${dados[count]}`)
}
console.log(`A soma dos dados são: ${soma}`)