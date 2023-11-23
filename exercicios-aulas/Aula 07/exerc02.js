let operacao = 0;
let saldo = 0;
while (true) {
    operacao = Number(prompt("Digite a operação que deseja realizar \n (1) Depósito \n (2) Saque \n (3)Saldo \n (4) Encerrar"))
    switch (operacao) {
        case 1:
            saldo = operacaoDeposito(saldo)            
            break;
        case 2:
            saldo = operacaoSaque(saldo)
            break;
        case 3:
            alert(`Saldo atual da conta: R$ ${saldo}`)
            console.log(`Saldo atual da conta: R$ ${saldo}`)  
            break;    
    }
    if(operacao == 4) break;
}

function operacaoDeposito(saldoParams) {
    const valor = Number(prompt("Digite o valor do doposito: "))
    if(saldoParams == 0){
        saldoParams = valor;
        alert(`Deposito no valor de R$ ${valor} realizado com sucesso.`)
        console.log(`Deposito no valor de R$ ${valor} realizado com sucesso.`)
    }else{
        saldoParams += valor;
        alert(`Deposito no valor de R$ ${valor} realizado com sucesso.`)
        console.log(`Deposito no valor de R$ ${valor} realizado com sucesso.`)
    }
    return saldoParams
}

function operacaoSaque(saldoParams) {
    const valor = Number(prompt("Digite o valor do doposito: "))
    if(saldoParams == 0){
        alert("Saldo insuficiente para ralizar saques")
        console.log("Saldo insuficiente para ralizar saques")
    }else{
        saldoParams -= valor
        alert(`Saque no valor de R$ ${valor} realizado com sucesso.`)
        console.log(`Saque no valor de R$ ${valor} realizado com sucesso.`)
    }
    return saldoParams
}
