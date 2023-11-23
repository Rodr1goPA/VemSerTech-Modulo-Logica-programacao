function calculadora() {
    let operacao = prompt("Qual operação aritmética você deseja realizar:\n Soma(+)\nSubtração(-)\nDivisão(/)\nMultiplicação(*)")
    let numero1 = Number(prompt("Digite o primeiro valor:"))
    let numero2 = Number(prompt("Digite o segundo valor:"))
    let result = 0;
    
    try {
        result = calcular(operacao, numero1, numero2)
    } catch (error) {
        console.error("Erro: " + error.message);
    }

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

function divisao(numero1, numero2) {
    if (numero2 === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return numero1 / numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

function calcular(tipo, numero1, numero2) {
    switch (tipo) {
        case "+":
            return soma(numero1, numero2);
        case "-":
            return subtracao(numero1, numero2);
        case "/":
            return divisao(numero1, numero2);
        case "*":
            return multiplicacao(numero1, numero2);
        default:
            throw new Error("Operação inválida");
    }
}
console.log(result)
}
calculadora()
