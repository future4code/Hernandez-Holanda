/*Exercícios de interpretação de código

Exercício 1.

Irá aparecer na linha 1 do console: Matheus Nachtergaele
Irá aparecer na linha 2 do console: Virginia Cavendish
Irá aparecer na linha 3 do console: canal: "Globo", horario: "14h"

Exercício 2.

A)

Irá aparecer no console as propriedades do objeto cachorro. O nome do cachorro = Juca, 
idade = 3, e sua Raça = SRD.
Nos demais consoles irão aparecer as propriedades do Objeto cachorro, porém com alterações, 
na segunda linha, aparecerá o nome do gato sendo Juba, e na terceira linha, como sendo Jubo, 
pois a propriedade replaceAll irá alterar o "A" por "O", além de tanto na segunda, quanto na
terceira linha do console o restantes das propriedades, anos e raça serem os mesmo. 

B)

A propriedade ... é chamada de spreed, ela copia um objeto para outro, além de ser posssível
mudar ou adicionar alguma propriedade do objeto raiz.  

Exercício 3.

A e B) Na primeira linha do console irá aparecer false, pois foi chamada a propriedade 
backender que que foi declarada como sendo "false". 
Na segunda linha irá aparcer undefined, pois a propriedade altura não foi declarada. 

***********************************************************************************************/

// Exercícios de escrita de código

// 1.

// A)

 const individuo = {
    nome: "Thais",
    apelidos: ["Thaizinha" , " Tata", " Tahzinha"],
    } 
 informacoes = () => {
    console.log(`Eu sou ${individuo.nome} mas pode me chamar de: ${individuo.apelidos}.`)
 }
 informacoes()


// B)

 const individuo = {
    nome: "Thais",
    apelidos: ["Thaizinha" , " Tata", " Tahzinha"],
    }

   const novoIndividuo = {
   ...individuo,
   apelidos: ["Tha" , " Talinda", " Talove"],
 }   
 
 informacoes = () => {
    console.log(`Eu sou ${individuo.nome} mas pode me chamar de: ${novoIndividuo.apelidos}.`)
 }
informacoes()

// 2.

const people = {
   nome: "Hernandez",
   idade: 26,
   profissao:"Desenvolvedor FrontEnd",
 }
 function pessoa () {
   console.log(`${people.nome}, ${people.nome.length}, ${people.idade}, ${people.profissao}, ${people.profissao.length} `)
}
pessoa()

// 3.

const carrinho = []

const fruta1 = {
nome: "Banana",
disponibilidade: true
}
const fruta2 = {
nome: "Uva",
disponibilidade: true,
}
const fruta3 = {
nome: "Carambola",
disponibilidade: true,
}

function novasFrutas (fruta1) {
   carrinho.push(fruta1)
}
function novasFrutas1 (fruta2) {
   carrinho.push(fruta2)
}
function novasFrutas2 (fruta3) {
   carrinho.push(fruta3)
}

novasFrutas(fruta1.nome)
novasFrutas1(fruta2.nome)
novasFrutas2(fruta3.nome)

console.log(carrinho)

