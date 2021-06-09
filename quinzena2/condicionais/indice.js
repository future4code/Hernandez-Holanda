/*  Exercícios de interpretação de código 
 
    Exercício 1.

    A)
    O código a cima coloca uma condição para executar um bloco de cógdigo, se o número digitado
    pelo usuário tiver o resto da sua divisão igual ao 0 ele retornará "Passou no teste", caso 
    o resto seja 1, então irá retornar que o usuário "Não passou no teste".

    B) Ele retornará "Passou no teste" para números onde o resto de divisão por dois seja 0,
    ou seja, números pares. 

    C) Ele Ele retornará "Não passou no teste" para números onde o resto de divisão por dois
    seja 1, ou seja, números ímpares. 

    Exercício 2.

    A) 
    O código a cima serve para pedir para o usuário uma fruta, caso ela esteja dentro do objeto
    fruta então ele retornará o preço da fruta escolhida.
    
    B) 
    O console irá retornar "O preço da fruta Maçã é R$ 2.25."

    C)
    Se tirarmos o break ele irá substituir o preço da Pêra pelo preço declarado no default que 
    no caso é $ 5. O default será um valor para agregar a uma fruta que diferente das que estão
    no objeto fruta. 
    "O preço da fruta  Pera  é  R$ 5"

    Exercício 3.
    
    A) 
    A primeira linha armazena o número que o usúario colocou em uma constante chamada de 
    número. 

    B)
    Caso o número fosse 10 então a condicional seria executada, como 10 é maior que 0 o console
    iria retornar "Esse número passou no teste"
    Caso fosse -10, então o console irá retornar um erro pois a variavel "mensagem" foi declarada 
    apenas no escopo local. 

    C) 
    Sim, irá retornar um erro pois a variavel mensagem não foi declarada no escopo global, 
    apenas no local, então a função não irá reconhecer já que ela está fora do escopo local 
    onde a variável "mensagem" se encontra. 
*/

//  Exercícios de escrita de código

//  1. 

    const idadeDoUsuario = Number(prompt("Qual a sua idade?"))

    if(idadeDoUsuario >= 18 ) {
    console.log("Você pode dirigir")
    }else{
    console.log("Você não pode dirigir")
    }

//  2. 

    const turnoDoAluno1 = prompt("Digite o dígito referente ao seu turno no curso: M (matutino) ou V (Vespertino) ou N (Noturno) ")
    if (turnoDoAluno1 === "M") {
    console.log("Bom dia")
    } else if (turnoDoAluno1 === "V") {
        console.log("Boa tarde")  
    } else if (turnoDoAluno1 === "N") { 
        console.log("Boa noite")
    }
    
 // 3. 


    const turnoDoAluno1 = prompt("Digite o dígito referente ao seu turno no curso: M (matutino) ou V (Vespertino) ou N (Noturno) ")
    if (turnoDoAluno1 === "M") {
    console.log("Bom dia")
    } else if (turnoDoAluno1 === "V") {
        console.log("Boa tarde")  
    } else if (turnoDoAluno1 === "N") { 
        console.log("Boa noite")
    }

// 4.

    const generoDoFilme = prompt("Qual o gênero do filme")
    const valorDoIngresso = prompt("Qual o valor do ingresso")

    if (generoDoFilme === "Fantasia" && valorDoIngresso < 15 ){
        console.log("Bom filme!")
    } else if (generoDoFilme != "Fantasia" && valorDoIngresso >= 15 ){
        console.log("Escolha outro filme!")
    }
