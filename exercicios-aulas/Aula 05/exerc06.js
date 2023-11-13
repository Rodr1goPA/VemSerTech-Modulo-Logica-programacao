function jogoDaVelha() {
    let jogoDaVelho = [
        { A1: "?", A2: "?", A3: "?" },
        { B1: "?", B2: "?", B3: "?" },
        { C1: "?", C2: "?", C3: "?" },
    ];
    let linha = null;
    let coluna = null;
    let opcaoSwitch = null;
    let jogada = null;
    
    while(true){
        console.log(`
        1 2 3
      A ${jogoDaVelho[0].A1} ${jogoDaVelho[0].A2} ${jogoDaVelho[0].A3}
      B ${jogoDaVelho[1].B1} ${jogoDaVelho[1].B2} ${jogoDaVelho[1].B3}
      C ${jogoDaVelho[2].C1} ${jogoDaVelho[2].C2} ${jogoDaVelho[2].C3}   
      `)
        linha = prompt('Digite em qual linha você quer jogar(A,B,C):').toLocaleUpperCase()
        coluna = prompt('Digite em coluno você quer jogar(1,2,3):')
        jogada = prompt('Digite "X" ou "O" para fazer o jogada:').toLocaleUpperCase()
        opcaoSwitch = linha + coluna
        switch (opcaoSwitch) {
            case "A1":
                jogoDaVelho[0].A1 = jogada
                break;
            case "A2":
                jogoDaVelho[0].A2 = jogada
                break;
            case "A3":
                jogoDaVelho[0].A3 = jogada
                break;
            case "B1":
                jogoDaVelho[1].B1 = jogada
                break;
            case "B2":
                jogoDaVelho[1].B2 = jogada
                break;
            case "B3":
                jogoDaVelho[1].B3 = jogada
                break;
            case "C1":
                jogoDaVelho[2].C1 = jogada
                break;
            case "C2":
                jogoDaVelho[2].C2 = jogada
                break;
            case "C3":
                jogoDaVelho[2].C3 = jogada
                break;
        }
      
        if (jogoDaVelho[0].A1 == jogada && jogoDaVelho[0].A2 == jogada && jogoDaVelho[0].A3 == jogada ) {
            console.log(`O jogador "${jogada}" ganhou!!!`)
            break;
        }
        if (jogoDaVelho[1].B1 == jogada && jogoDaVelho[1].B2 == jogada && jogoDaVelho[1].B3 == jogada ) {
            console.log(`O jogador "${jogada}" ganhou!!!`)
            break;
        }
        if (jogoDaVelho[2].C1 == jogada && jogoDaVelho[2].C2 == jogada && jogoDaVelho[2].C3 == jogada ) {
            console.log(`O jogador "${jogada}" ganhou!!!`)
            break;
        }
        if (jogoDaVelho[0].A1 == jogada && jogoDaVelho[1].B1 == jogada && jogoDaVelho[2].C1 == jogada){
            console.log(`O jogador "${jogada}" ganhou!!!`)
            break;
        }
        if(jogoDaVelho[0].A2 == jogada && jogoDaVelho[1].B2 == jogada && jogoDaVelho[2].C2 == jogada){
            console.log(`O jogador "${jogada}" ganhou!!!`)
            break;
        }
        if(jogoDaVelho[0].A3 == jogada && jogoDaVelho[1].B3 == jogada && jogoDaVelho[2].C3 == jogada){
            console.log(`O jogador "${jogada}" ganhou!!!`)
            break;
        }
        if (jogoDaVelho[0].A1 == jogada && jogoDaVelho[1].B2 == jogada && jogoDaVelho[2].C3 == jogada){
            console.log(`O jogador "${jogada}" ganhou!!!`)
            break;
        }
        if(jogoDaVelho[2].C1 == jogada && jogoDaVelho[1].B2 == jogada && jogoDaVelho[0].A3){
            console.log(`O jogador "${jogada}" ganhou!!!`)
            break;
        }
    }    
    console.log(`
    1 2 3
    A ${jogoDaVelho[0].A1} ${jogoDaVelho[0].A2} ${jogoDaVelho[0].A3}
    B ${jogoDaVelho[1].B1} ${jogoDaVelho[1].B2} ${jogoDaVelho[1].B3}
    C ${jogoDaVelho[2].C1} ${jogoDaVelho[2].C2} ${jogoDaVelho[2].C3}   
    `)
}