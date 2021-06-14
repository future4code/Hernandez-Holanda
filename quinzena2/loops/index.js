/************************************************************************************************

  Exercícios de interpretação de código
  
  1.

  O código está fazendo um loop, onde ele soma mais um no contador através do i++ e 
  adiciona o número novo de "i" a variavel valor por conta da linha "valor += i" sem alterar
  o valor de "i", em seguida ele repete a ação somando o atual valor da variavel "valor" 
  com o atual valor da variavel "i", isso se repetirá por cinco vezes pois foi escrita uma 
  condição onde i tem que ser menor que 5, quando ele deixar de ser acaba o loop.
  No fim a variavel valor vai ser = 10.
  0 + 0 = 0
  0 + 1 = 1
  1 + 2 = 3
  3 + 3 = 6
  6 + 4 = 10

  2.

  A) Será impresso no console todos os índices do array que forem maior do que 18.

  B) Sim, é possível percorrer um array com for of, eu teria que iniciar a variavel número 
  sendo menor que o valor do primeiro número do indice do array lista, que no caso é 10.

  3.

  Se o usuário escrevesse 4 iria aparecer no console: 
  *
  ** 
  *** 
  **** 
  Isso iria ocorrer pois acionaria a condição while, onde irá fazer com que o código seja rodado
  quatro vezes, isso por conta do valor 4 adicionado pelo usuário, essa condição se apresenta na
  linha onde o while foi chamado, subtraindo o valor da quantidadeAtual pelo valor da Quantidade 
  total escrita pelo usuário. 
  Em seguida entrará o for, enquanto asteriscos não for maior que a QuantidadeAtual + 1 o loop
  não irá acabar, fazendo com que asterisco seja somado quatro vezes e em cada uma da vez que o 
  loop acontece o valor da variavel linha é somado um vez com ela mesma, sendo o valor da 
  variavel linha "*", isso fará com que a primeira vez apareça só um asterisco, na segunda uma
  concatenação do valor de um asterisco + outro asterisco por conta do += que significa 
  linha = linha + "*", isso por quatro vezes, em cada vez que o loop for executado
  o valor de linha será atualizado e somado mais um asterisco. 
  No final da quarta vez a quantidade atual deixará de ser menor que a quantidadeTotal então
  o loop se incerrará.

*/

/*********************************************************************************************

  Exercícios de escrita de código

 */

// 1. 

let bichinhosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))
let arrayPets = []
let novosPets = ""
if ( bichinhosDeEstimacao === 0) {
  console.log("Que pena! Você pode adotar um pet!")
}else{
    for (let i = 0; i < bichinhosDeEstimacao; i++) {
      novosPets = prompt("Quais os nomes dos seus pets?")
      arrayPets.push(novosPets)
}
console.log(arrayPets)
}


// 2. 

// A)

 let arrayOriginal = [2, 4, 5, 9, 11, 13, 19, 20, 25]

 for ( let i = 0; i < arrayOriginal.length; i++){
  console.log(arrayOriginal[i])
}

// B)

for ( let i = 0; i < arrayOriginal.length; i++){
  console.log(arrayOriginal[i]/10)
}

// C)

const soPares = () => {
let numerosPar = []

for (let i = 0; i < arrayOriginal.length; i++){
  if (arrayOriginal[i] % 2 === 0 ) {
    numerosPar.push(arrayOriginal[i])
      }
    } 
    return numerosPar
 }

console.log(soPares(arrayOriginal))

// D)

const arrayVetor = () => {
  const arrayString = [
    "O elemento do índex 1 é: numero " + arrayOriginal[0], 
    "O elemento do índex 2 é: numero " + arrayOriginal[1], 
    "O elemento do índex 3 é: numero " + arrayOriginal[2], 
    "O elemento do índex 4 é: numero " + arrayOriginal[3],
    "O elemento do índex 5 é: numero " + arrayOriginal[4],
    "O elemento do índex 6 é: numero " + arrayOriginal[5],
    "O elemento do índex 7 é: numero " + arrayOriginal[6],
    "O elemento do índex 8 é: numero " + arrayOriginal[7],
    ]
  for (let i = 0; i < arrayOriginal.length; i++){
  console.log(arrayString[i])
  }
}

console.log(arrayVetor(arrayOriginal))

// E)

let valorMaximo = 1
let valorMinimo = arrayOriginal[0]

const maiorMenor = () => {
 
  for (let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] > valorMaximo) {
      valorMaximo = arrayOriginal[i] 
    } 
  }
}

console.log(maiorMenor(arrayOriginal))
console.log("O maior número é " + valorMaximo, "e o menor número é " + valorMinimo)

