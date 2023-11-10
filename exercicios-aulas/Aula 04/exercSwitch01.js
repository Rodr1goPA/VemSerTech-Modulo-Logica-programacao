const numero = 3;
const result = numero % 2

switch (result) {
    case 0:
        console.log(`Esse numero ${numero} é "PAR"!`)
        break;

    default:
        console.log(`Esse numero ${numero} é "IMPAR"!`)
        break;
}