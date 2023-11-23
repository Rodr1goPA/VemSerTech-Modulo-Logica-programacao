function miniGame() {

let escolhaJogador = Number(prompt("Quem vai iniciar o jogo: \n [1] Play1 \n [2] Play 2"))
let play1 = null;
let play2 = null;
let linha = null;
let coluna = null;
let opcaoSwitch = null;
let jogada = null;
let count = null;
let ganhador = false;
let jogoDaVelha = [
    { A1: "?", A2: "?", A3: "?" },
    { B1: "?", B2: "?", B3: "?" },
    { C1: "?", C2: "?", C3: "?" },
];

switch (escolhaJogador) {
    case 1:
        play1 = true;
        play2 = false;
        break;
    case 2:
        play2 = true;
        play1 = false;
}

tabuleiroDoJogo(jogoDaVelha)

while(true){
    
    inputJogador(play1 ,play2)
    
    inputJogada(opcaoSwitch)

    count++;
    console.log(`Jogada ${count}`)

    tabuleiroDoJogo(jogoDaVelha)
    
    verificacaoGanhador(jogoDaVelha , jogada)
    
    if(ganhador == true) break;

}

//Funções criadas para o funcionamento do jogo
function tabuleiroDoJogo(jogoDaVelhaParams) {
    console.log(`
    1 2 3
  A ${jogoDaVelhaParams[0].A1} ${jogoDaVelhaParams[0].A2} ${jogoDaVelhaParams[0].A3}
  B ${jogoDaVelhaParams[1].B1} ${jogoDaVelhaParams[1].B2} ${jogoDaVelhaParams[1].B3}
  C ${jogoDaVelhaParams[2].C1} ${jogoDaVelhaParams[2].C2} ${jogoDaVelhaParams[2].C3}   
  `)
}

function inputJogador (jogador1 , jogador2) {
    if(jogador1 == true){
        linha = prompt('Play1 \n Digite em qual linha você quer jogar(A,B,C):').toLocaleUpperCase()
        coluna = prompt('Digite em qual coluna você quer jogar(1,2,3):')
        jogada = prompt('Digite "X" para fazer o jogada:').toLocaleUpperCase()

        opcaoSwitch = linha + coluna
        play1 = false;
        play2 = true;
    }else if(jogador2 == true){
        linha = prompt('Play2 \n Digite em qual linha você quer jogar(A,B,C):').toLocaleUpperCase()
        coluna = prompt('Digite em qual coluna você quer jogar(1,2,3):')
        jogada = prompt('Digite "O" para fazer o jogada:').toLocaleUpperCase()
        opcaoSwitch = linha + coluna
        play2 = false;
        play1 = true;
    }
}

function inputJogada(opcaoSwitchParams) {
    switch (opcaoSwitchParams) {
        case "A1":
            jogoDaVelha[0].A1 = jogada
            break;
        case "A2":
            jogoDaVelha[0].A2 = jogada
            break;
        case "A3":
            jogoDaVelha[0].A3 = jogada
            break;
        case "B1":
            jogoDaVelha[1].B1 = jogada
            break;
        case "B2":
            jogoDaVelha[1].B2 = jogada
            break;
        case "B3":
            jogoDaVelha[1].B3 = jogada
            break;
        case "C1":
            jogoDaVelha[2].C1 = jogada
            break;
        case "C2":
            jogoDaVelha[2].C2 = jogada
            break;
        case "C3":
            jogoDaVelha[2].C3 = jogada
            break;
    }
}

function verificacaoGanhador(jogoDaVelhaParams, jogadaParams) {
    const linhas = [
        [jogoDaVelhaParams[0].A1, jogoDaVelhaParams[0].A2, jogoDaVelhaParams[0].A3],
        [jogoDaVelhaParams[1].B1, jogoDaVelhaParams[1].B2, jogoDaVelhaParams[1].B3],
        [jogoDaVelhaParams[2].C1, jogoDaVelhaParams[2].C2, jogoDaVelhaParams[2].C3],
    ];

    const colunas = [
        [jogoDaVelhaParams[0].A1, jogoDaVelhaParams[1].B1, jogoDaVelhaParams[2].C1],
        [jogoDaVelhaParams[0].A2, jogoDaVelhaParams[1].B2, jogoDaVelhaParams[2].C2],
        [jogoDaVelhaParams[0].A3, jogoDaVelhaParams[1].B3, jogoDaVelhaParams[2].C3],
    ];

    const diagonais = [
        [jogoDaVelhaParams[0].A1, jogoDaVelhaParams[1].B2, jogoDaVelhaParams[2].C3],
        [jogoDaVelhaParams[2].C1, jogoDaVelhaParams[1].B2, jogoDaVelhaParams[0].A3],
    ];

    const todasLinhasColunasDiagonais = [...linhas, ...colunas, ...diagonais];

    for (const linhaColunaDiagonal of todasLinhasColunasDiagonais) {
        if (linhaColunaDiagonal.every((element) => element === jogadaParams)) {
            if (jogadaParams === "X") {
                console.log("O jogador Play 1 ganhou");
            } else {
                console.log("O jogador Play 2 ganhou");
            }
            ganhador = true;
            return;
        }
    }
}
}