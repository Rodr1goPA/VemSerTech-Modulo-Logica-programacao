let pessoa = {
    nome: "Rodrigo",
    idade: 37,
    cidade : "Pouso Alegre"
}

for(propriedade in pessoa){
    console.log(propriedade + ':' + pessoa[propriedade])
}