/*
Crie uma função chamada verificarCompatibilidade que aceita dois argumentos: 

navegador
sistemaOperacional

A função deve retornar true se o navegador for "Chrome" ou "Firefox" e o sistema operacional for "Windows" ou "Mac".

Entrada:	navegador: Chrome 	- sistemaOperacional: Windows	=> 	Saida: true
		navegador: Chrome 	- sistemaOperacional: Mac		=> 	Saida: true
		navegador: Firefox 	- sistemaOperacional: Windows	=> 	Saida: true
		navegador: Firefox 	- sistemaOperacional: Mac		=> 	Saida: true
		navegador: Firefox 	- sistemaOperacional: Sony	=> 	Saida: false
		navegador: Safari 	- sistemaOperacional: Mac		=> 	Saida: false
*/

const navegador = "chrome";
const sistemaOperacional = "mac"

const result = navegador == "chrome" || navegador == "firefox" && sistemaOperacional == "windows" || sistemaOperacional == "mac"

console.log(result)