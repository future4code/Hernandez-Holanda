
/* Exercicios de interpretação de código

1. 

A)

Seria impresso no console: 10
Seria impresso no console: 50

B)
Não iria acontecer nada, pois a função "minhaFuncao" nao foi declarada.


2. 

A)

 Essa função é um bloco de código que toda vez que chamada faz a ação de multiplicar 
 o argumento declarado por cinco

B)
Aparecerá true, constatando que cenoura aparece dentro do texto, logcamente por considerar 
ele todo em letras minúsculas por conta do toLowerCase.

/*

//**********************************************************************************************/

// Exercícios de escrita de código

// 1. 

//A)

const meusDados = () => {

const nome = "Hernandez"
const idade = 26
const cidade = "São Paulo"
const estudante = "sou estudante"
console.log(`Eu sou ${nome}, tenho ${idade}, anos, moro em ${cidade} e sou ${estudante}`)
}
meusDados()
*/

// B)

const outrosDados = (nome, idade, cidade, estudante) => {

console.log(`Eu sou ${nome}, tenho ${idade}, anos, moro em ${cidade} e sou ${estudante}`)
}
outrosDados("Hernandez", 26, "São Paulo", "sou estudante")


// 2.

// A)
const soma = (num1, num2) => {
	const somar = num1 + num2
	console.log(somar)
}
soma(2,4)

// B) 

const boolean = (numA, numB) => {
	const maiorIgual = numA >= numB
	console.log(maiorIgual)
}
boolean(9,9)


//C) 

const parOuNão = (numX) => {

	const par = numX % 2 === 0 
	console.log(par)
}
parOuNão(8)

// D)

const escrever = (palavra) => {
	const stringX = palavra
	console.log(stringX.length).toUpperCase
}
escrever("Labenu")

// 3. 
const operacoes = (primeiroNumero, segundoNumero) => {

	const somarVariaveis = primeiroNumero + segundoNumero
	const subtrairVariaveis = primeiroNumero - segundoNumero
	const multiplicarVariaiveis = primeiroNumero * segundoNumero
	const dividirVariaiveis = primeiroNumero / segundoNumero
	console.log("A soma é", somarVariaveis)
	console.log("A subtração é", subtrairVariaveis)
	console.log("A multiplicação é", multiplicarVariaiveis)
	console.log("A divisão é ", dividirVariaiveis)
}
operacoes(4,5)


//*************************************DESAFIO************************************************ 

// 1.

// A)

const soma3 = (anos) => {
	console.log(anos)
}
soma3(26)

// B)

const soma =(anos1,quantidadeDeFilhos) => {
	const soma = anos1 + quantidadeDeFilhos
	console.log(anos+quantidadeDeFilhos+anos1)
}

soma()

/* 

2.

const pitagoras = (a,b) => {
	
	const a = a ** 2
	const b = a ** 2
	const somaDosCatetos = a + b 
	const hip = Math.sqrt(somaDosCatetos,2)
	console.log(hip)
}
 pitagoras(3,4)

 Obs: Não entendi o motivo do código não ter rodado. :( 
	 
*/
