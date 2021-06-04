// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  let alturaDoRetangulo = prompt('Digite a altura do retangulo')
  let larguraDoRetangulo = prompt('Digite largura do retangulo')
  console.log( alturaDoRetangulo * larguraDoRetangulo)
}

// Exercício 2
function imprimeIdade() {
  let anoDeNascimento = prompt('Digite')
  let anoAtual = prompt('Digite')
    console.log(anoDeNascimento - anoAtual)
}

// Exercício 3
function calculaIMC() {
  let pesoDoUsuario = prompt('Digite')
  let alturaDoUsuario = prompt('Digite')

    console.log(pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario))
}

// Exercício 4
function imprimeInformacoesUsuario() {
const nomeUsuario = prompt("Qual o seu nome?")
const idadeUsuario = prompt("Qual a sua idade?")
const emailUsuario = prompt("Qual o seu email?")

console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
let corPreferida1= prompt('Digite')
let corPreferida2 = prompt('Digite')
let corPreferida3 = prompt('Digite')

console.log([corPreferida1,corPreferida2,corPreferida3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
 let falaAlgumaCoisa = prompt('Digite')
 console.log(falaAlgumaCoisa.toUpperCase())
  }

// Exercício 7
function calculaIngressosEspetaculo() {
  let custoDoEspetaculo = prompt('Digite')
  let valorDoIngresso = prompt('Digite')
  console.log(custoDoEspetaculo / valorDoIngresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  const stringUm = prompt('Digite')
  const stringDois = prompt('Digite')
 console.log(stringUm.length)
 console.log(stringDois.length)
 console.log(stringUm >= stringDois)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
const escrevaString = prompt('Escreve uma string')
const escrevaStringDois = prompt('Escreve mais uma string')
const comparacao = escrevaString.toUpperCase() === escrevaStringDois.toUpperCase();
console.log(comparacao)
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual1 = prompt('Digite')
  const anoDeNascimento = prompt('Digite')
  const anoDeEmissaoDoRg = prompt('Digite')

  const idade = anoAtual1 - anoDeNascimento
  console.log(idade)

  const tempoDeEmissao = anoAtual1 - anoDeEmissaoDoRg
  console.log(tempoDeEmissao)

  console.log((idade <= 20 && tempoDeEmissao >= 5) || (idade > 20 && idade <= 50 && tempoDeEmissao >= 10)
   || (idade > 50 && tempoDeEmissao >= 15 ))

}
// Exercício 11
//function checaAnoBissexto() {

  /*if(ano % 400 == 0) {
    return "É um ano Bissexto";
  } else if (ano % 100 == 0) {
    return "Não é um ano Bissexto";
  } else if ( ano % 4 == 0) {
    return "É um ano Bissexto";
  }
  return "Não é um ano Bissexto";
}
const ano = Number(prompt("digite um ano"))

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idadeAluno = prompt("Você tem mais de 18 anos?")
  const maioridade = idadeAluno >= 18 
  const ensinoMedio = prompt("Você possui ensino medio completo?")
  const ensinoMedioCompleto = ensinoMedio === "sim"
  const disponibilidade = prompt("Você possui disponibilidade de exclusiva durante os horários do curso")
  const disponibilidadeCompleta = disponibilidade === "sim"

}
*/