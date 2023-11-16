let nDados = Number(prompt("Digite a quantidade de dados para jogar: "))
let nLados = Number(prompt("Digite o numero de lados dos dados: "))
let qtdTentativas = Number(prompt("Digite a quantidade de tentativas: "))
let dados = []
let soma = null;

for(i = 1 ; i <= qtdTentativas ; i++){
    console.log(`Tentativa ${i}`)
    for(count = 0; count < nDados ; count ++){
        const numeroAleatorio = Math.floor(Math.random() * nLados) + 1;
        dados.push(numeroAleatorio)
        soma += numeroAleatorio;
        console.log(`dado ${count + 1} : ${dados[count]}`)
    }
    console.log(`A soma dos dados são: ${soma}`)
}