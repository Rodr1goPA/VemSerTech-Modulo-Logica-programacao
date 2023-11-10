const aluno = {
    nome:"Rodrigo",
    nota1: 7,
    nota2: 3
}

const media = aluno.nota1 + aluno.nota2 / 2;
const resultMedia = media >=7


console.log(`Nota do aluno: ${media}`)
console.log("Aprovado: " + resultMedia)