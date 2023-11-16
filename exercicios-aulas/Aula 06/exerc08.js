let palavra = "uva";
let arrayPalavra = palavra.split('')
let arrayVogal = []
for(count = 0; count < arrayPalavra.length ; count++){
    switch (arrayPalavra[count]) {
        case "a":
            arrayVogal.push(arrayPalavra[count])
            break;
        case "e":
            arrayVogal.push(arrayPalavra[count])
            break;
        case "i":
            arrayVogal.push(arrayPalavra[count])
            break;
        case "o":
        arrayVogal.push(arrayPalavra[count])
            break;
        case "u":
        arrayVogal.push(arrayPalavra[count])
            break;
    }
}
console.log(`Palavra digitada foi "${palavra}" , essa palavra contém "${arrayVogal.length}" vagais , que são "${arrayVogal}".`)