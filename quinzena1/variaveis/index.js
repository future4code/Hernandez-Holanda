/*****************************************************************************************

*Exercícios de interpretação de código

1. 

Será impresso no console: 10 
Depois será impresso: 10 5 

2. 

Será impresso no console 10 10 10

3. 
    let horasDeTrabalhoPorDia = prompt("Quantas horas você trabalha por dia?")
    let pagamentoPorDia = prompt("Quanto você recebe por dia?") 

******************************************************************************************

Exercícios de escrita de código
Obs (Coloquei como comentário esse exercicío para não atrapalhar nos exercicíos abaixo, pois 
são os mesmos nomes usados para as váriaveis.) 
*/


// 1.

// a)

 let nome =

// b) 

let idade =

// c)

 console.log(typeof nome)
 console.log(typeof idade)

// d)

/* Primeiro eu tentei declarar como const, porém const não pode ficar sem ser declarada, 
então voltou um erro de sintaxe.
Depois eu coloquei como let, então voltou undefined, pois eu criei uma variavel e não coloquei 
um valor. 
*/



// e)  

const nome = prompt ("Qual o seu nome?")
const idade = prompt ("Qual a sua idade?")

console.log(nome) 
console.log(idade) 

// f) 

console.log(typeof nome)
console.log(typeof idade)

/*Notei que as variaveis voltam como string, isso acontece pois por padrão a caixa do prompt 
sempre recebe texto, se fosse necessário mudar a caracteristíca da variavel eu teria que
fazer uma conversão. 
*/

// g)

console.log("Olá", nome, "você tem", idade, "anos") 

//*******************************************************************************************

// 2. 

let vocêEstaBem = prompt ("você está bem?")
let tomouVacina = prompt ("Você ja tomou a vacina da covid19?")
let gostaDePraia = prompt ("Você gosta de ir a praia? ")

console.log(vocêEstaBem)
console.log(tomouVacina)
console.log(gostaDePraia)



// 3. 

let a = 25
let b = 10

let c = a
a = b
b = c



console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//**********************************************************************************************

//Desafio Opcional 

let numero1 = prompt ("Digite um número")
let numero2 = prompt ("Digite outro número")
let resultadoSoma = numero1 + numero2
let resultadoMultiplicacao = numero1 * numero2

console.log(resultadoSoma)
console.log(resultadoMultiplicacao)

/* Como visto anteriormente o prompt só recebe texto, então identifica os números não como
números, mas como strings, porisso o resultado da soma não foi a soma entre os números digitados
e sim a concatenação dos números. Porém por algum motivo ele interpretou a multiplicação da forma
correta, acredito que o próprio sistema acaba tentando dar um jeito de solucionar o problema, 
talvez ele reconheça o comando * de forma universal e assim converteu os números não como strings.
*/

 

