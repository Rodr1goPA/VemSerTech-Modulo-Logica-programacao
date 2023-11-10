const frutas = new Map()

frutas.set("maçã" , 3.50)
frutas.set("banana" , 2.80)
frutas.set("pêra", 5.00)
frutas.set("uva", 5.00)

const comparacaoPreco1 = frutas.get("maçã") > frutas.get("banana")
const comparacaoPreco2 = frutas.get("pêra") != frutas.get("uva")

console.log("Maçã é mais cara que a banana: " + comparacaoPreco1)
console.log("O preço da pera é diferente do preço da uva :" +comparacaoPreco2)