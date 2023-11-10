const vogal = "a";

switch (vogal){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log(`A letra "${vogal}" é uma vogal!`)       
        break
    default:
        console.log(`A letra "${vogal}" é uma consoante!`)
        break
}