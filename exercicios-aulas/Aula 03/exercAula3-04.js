const pessoa = {
    nome:"Rodrigo",
    idade:37,
    cidade:"Pouso Alegre"
}
const result = [pessoa.idade >=18 , pessoa.cidade == "São Paulo"]

console.log("Tem 18 ou mais: " + result[0])
console.log("Mora em São Paulo: " + result[1])