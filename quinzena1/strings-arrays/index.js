/*Exercícios de interpretação de código

Exercício 1.

Linha número 1 - Irá aparecer undefined poiis os valores da variavel ainda não foram declarada. 

Linha número 2 - Vai retornar null pois definimos a varíavel como tal. 

Linha número 3 - Aparecerá o valor 11, pois chamamos a propriedade lenght que nos diz a 
quantidade de itens dentro de um array. 

Linha número 4 - Vai aparecer 3, pois chamamos a variavel array com o indice i, como foi
passado o 0 que seria o primeiro númeroo da variavel ''array'', então o valor no console é
o três.  

Linha número 5 - O número 4 que seria o indíce 1 da variavel array será removido e substituído
pelo 19, ja que foi adicionado o 19 a variavel array. 

Linha número 6 - Retornará o número 9, que seria o indíce 6, pois como tempos o Splite[i] 
contaremos a partir do próximo item do indíce a partir do número declarado que no caso seria
o 6, retornando assim o número 9, ja que contamos a partir do 0 quando se trata de computadores. 

Exercício 2. 

O valor impresso no console será: "SUBI NUM ÔNIBUS EM MIRROCOS" 27 


**********************************************************************************************/

// Exercícios de escrita de código

// Exercício 1.

const nomeDoUsuario = prompt("Qual o seu Nome")
const emailDoUsuario = prompt("Qual o seu email")

console.log( `O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o),
${nomeDoUsuario} `)


 // Exercício 2. 

const comidas = ["Picanha","Chocolate","Yakissoba","Pizza","Açai",]
console.log(comidas)


console.log(comidas[0])    
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

const comidasUsuario = prompt("Qual a sua comida preferida?")
comidas[1] = comidasUsuario
console.log(comidas)


// Exercício 3. 

let listaDeTarefas = []
const tarefa1 = prompt("Cite uma tarefa" )
const tarefa2 = prompt("Cite mais uma tarefa")
const tarefa3 = prompt("Cite mais uma tarefa")
listaDeTarefas = [tarefa1, tarefa2, tarefa3]
console.log(listaDeTarefas)

const tarefaRealizada = Number(prompt("Insira o número da tarefa, 1, 2 ou 3"))
console.log(listaDeTarefas.splice(tarefaRealizada-1, 1))
console.log(listaDeTarefas)


