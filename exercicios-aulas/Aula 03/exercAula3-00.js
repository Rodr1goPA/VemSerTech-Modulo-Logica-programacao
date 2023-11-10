const biblioteca = {
    livro1: {
        titulo:"A Arte da Guerra",
        autor: "Sun Tzu",
        anoPublicacao:1900
    },
    livro2: {
        titulo:"Dom Quixote",
        autor: "Miguel de Cervantes",
        anoPublicacao:1605
    },
    livro3: {
        titulo:"1984",
        autor: "George Orwell",
        anoPublicacao:1949
    },
}

biblioteca.livro4 = {
    titulo:"O pequeno Prrincipe",
    autor:"Antoine de Saint-Exupéry",
    anoPublicacao:1943,
}


console.log(biblioteca.livro1.autor)


biblioteca.livro4.titulo = "O pequeno Principe"
console.log(biblioteca)

delete biblioteca.livro3
console.log(biblioteca)

console.log('livro5' in biblioteca)