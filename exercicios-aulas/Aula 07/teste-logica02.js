const tamanhoEscada = Number(prompt("Digite o tamanho da escada em numeros de degraus: "))

if(tamanhoEscada >=1){
    mostrarEscada(tamanhoEscada)
}else{
    console.log("O numero de degraus de tem que ser maior ou igual a 1")
}

function mostrarEscada(n) {
    for (let index = 1; index <= n; index++) {
        let espacos = '';
        for (let indexEspacos = 0; indexEspacos < n - index; indexEspacos++) {
            espacos += ' ';
        }
    
        let hashtags = '';
        for (let indexHashtags = 0; indexHashtags < index; indexHashtags++) {
            hashtags += '#';
        }
    
        const degraus = espacos + hashtags;
        console.log(degraus);
    }
 }








