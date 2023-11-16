let arrayNumero = [1,2,3,4,5,6,7,8,9]
let buscaNumero = Number(prompt("Digite um numero: "))
let validate = false;
for(countNumero of arrayNumero){
    if (buscaNumero == countNumero) {
        validate = true;
        break;
    }
}
validate == true?console.log(`Numero ${buscaNumero} encontrado!!!`):console.log(`Esse numero ${buscaNumero} não existe no array`)