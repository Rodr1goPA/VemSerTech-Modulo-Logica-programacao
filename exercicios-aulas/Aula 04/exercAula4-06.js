const idadePessoa = 18;

/*Com ternario "?"*/
const resposta = idadePessoa >=18? "Pode comprar bebidas":"Não pode comprar bebidas";
console.log(resposta)


/*Sem ternário "if/else*/
if(idadePessoa >=18){
   console.log("Pode comprar bebidas")
}else{
    console.log("Não pode comprar bebidas")
}