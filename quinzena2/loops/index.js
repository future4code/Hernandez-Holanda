// Exercícios de interpretação de código

/* 1.
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
 2.)
 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 9) {
          console.log(numero)
      }
  }
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
  
1. 
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
*/

arrayOriginal = [2,4, 5, 9, 11, 13, 19, 22, 25]


for ( let i = 0; i < arrayPets; i++)
  console.log(arrayPets) 