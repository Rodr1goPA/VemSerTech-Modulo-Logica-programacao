let listaDeCompras = new Map();

listaDeCompras.set("Maçã" , 5)
listaDeCompras.set("Banana" , 3)
listaDeCompras.set("Leite" , 2)
listaDeCompras.set("Pão" , 1)

console.log(listaDeCompras.get("Leite"))

listaDeCompras.set("Maçã" , 10)
console.log(listaDeCompras)

listaDeCompras.delete("Pão")
console.log(listaDeCompras)

console.log(listaDeCompras.has("Leite"))

listaDeCompras.forEach((valor , chave) =>{
    console.log(chave + ":" + valor)
})

const qtdMaca = listaDeCompras.get("Maçã")
const qtdBanana = listaDeCompras.get("Banana")
const qtdLeite = listaDeCompras.get("Leite")
console.log(qtdMaca+qtdBanana+qtdLeite)


