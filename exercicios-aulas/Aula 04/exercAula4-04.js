const ladoA = 10;
const ladoB = 30;
const ladoC = 20;

if(ladoA == ladoB && ladoA == ladoC){
    console.log("Triangulo equilátero")
}else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ){
    console.log("Triangulo isósceles")
}else{
    console.log("Triangulo escaleno")
}