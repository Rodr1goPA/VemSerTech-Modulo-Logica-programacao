const ano = 1996;
const anoBissexto = ano % 4 == 0 && !ano % 100 == 0 || ano % 400 == 0?`O ano ${ano} é bissexto`: `O ano ${ano} não é bissexto`
console.log(anoBissexto)
