//Exercícios de interpretação de código

//******************* Exercício 1 *******************

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)*/

/*1 linha False
  2 linha False
  3 linha True  
  4 linha Boolean */

  //******************* Exercício 2 *******************

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = (primeiroNumero + segundoNumero)

console.log(soma) */

/* O problema é que o + concatena e não soma, pois por padrão o prompt recebe o valor como 
uma string, será recebido no console a junção das strings e não o valor da soma */



//******************* Exercício 3 *******************

/* A solução seria converter a string para número, usando o Number na frente do (prompt), como
no exemplo: 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!")) */



//Exercícios de escrita de código

// ******************* Exercício 1 *******************


let idade = Number(prompt("Digite a sua idade "))
let idadeMelhorAmigoa = Number(prompt("Digite a idade do seu melhor amigo(a)"))

console.log("Sua idade é maior que a do seu melhor amigo?", idade > idadeMelhorAmigoa)
console.log("Diferença de idade", idade - idadeMelhorAmigoa) 


// ******************* Exercício 2 *************************

let numeroPar = Number(prompt("Digite um numero par"))
console.log( numeroPar % 2) 

 Se o resultado for 0 o número é par.
    Caso o usuário insira um número ímpar, o resto da divisão será 1 

    // ******************* Exercício 3 *************************

    let suaIdadeEmMeses = Number(prompt("Digite sua idade em meses "))
    let suaIdadeEmDias = Number(prompt("Digite sua idade em dias"))
    let suaIdadeEmHoras = Number(prompt("Digite sua idade em horas"))
    console.log("A idade do usuário em meses é", suaIdadeEmMeses, "a idade do usuário em dias é", suaIdadeEmDias,
" e por fim, sua idade em Horas é", suaIdadeEmHoras) 

// ******************* Exercício 4 *************************

let primeiroNumero = prompt("Digite o primeiro numero")
let segundaNumero = prompt("Digite o segundo número")
console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundaNumero)       
console.log("O primeiro numero é igual ao segundo?", primeiroNumero == segundaNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundaNumero === 0 )
console.log("O segundo numero é divisível pelo primeiro?", segundaNumero % primeiroNumero === 0 ) 


/*O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true 
*/


// ******************* Desafio *************************

//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

//a)

let valorFharenheit = 77
let valorKelvin = (valorFharenheit - 32)*(5/9) + 273.15
console.log(valorKelvin) 

//b)

let valorCelsius = 80
let valorFharenheit = (valorCelsius)*(9/5) + 32
console.log(valorCelsius)
















