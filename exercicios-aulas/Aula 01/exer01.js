/*
Crie uma função chamada verificarElegibilidadeVoto que aceita dois argumentos:

idade
nacionalidade

A função deve retornar true se a pessoa for elegível para votar, o que ocorre quando a idade for maior ou igual a 16 e a nacionalidade for "brasileira", caso contrário, retorna false.

Entrada:		
idade: 16 - brasileiro 	=> saida: true
idade: 15 - brasileiro 	=> saida: false
idade: 18 - brasileiro 	=> saida: true
idade: 16 - eua => saida: false
idade: 15 - eua => saida: false
idade: 18 - eua => saida: false
*/
function verificaVoto(idade , nacionalidade) {
    if (idade >=16 && nacionalidade == "BR") {
        console.log("Eleitor elegível")
    }else{
        console.log("Eleitor inelegível")
    }
}
verificaVoto(15 , "BR")