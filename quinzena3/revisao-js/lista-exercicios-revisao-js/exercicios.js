// EXERCÍCIO 01

// Minha lógica 

function inverteArray(array) {  
      let arrayInverte = array.map((valor, i) => // Adicionei parametro de elemento e indice 
            array[array.length - 1 -i]) // tamanho do array - 1 para ter o ultimo elemento menos o indice negativo, essa conta me devolve um a um os elementos de trás para frente, isso ocorre por conta dos parâmetros adicionados.  
      return arrayInverte // retornei a variavel 
    }

// ************* Lógica sugerida pela lista de revisão ***************

// function inverteArray(array) {  
//   let arrayInvertido = [];  ||||||||| Criou uma variavel para adiconar o valor do array invertido
//   for(let i = array.length - 1; i >= 0; i-- ) { ||||||||| Chamou um laço que enquanto i for maior  igual a zera ele irá adicionar menos um indice, isso ocorrerá até i chegar a 0 que é o fim do laço. 
//       arrayInvertido.push(array[i]) ||||||||| Adicionou ou valores do indice dado pelo laço for ao array invertido
//     }
//   return arrayInvertido ||||||||| Retornou a variavel arrayInvertido
//   }

// EXERCÍCIO 02

// Minha lógica

function retornaNumerosParesElevadosADois(array) {
    const arrayPar = [] // 
       for (let i = 0; i < array.length; i++)
         if  (array[i] % 2 === 0){
              arrayPar.push(array[i] * array[i])
            }
    return arrayPar
}

// ************* Lógica sugerida pela lista de revisão ***************

// function retornaNumerosParesElevadosADois(array) {
// 	let novoArray = [];
// 	for(let i = 0; i < array.length; i++) {
// 		if(array[i] % 2 === 0) {
//       novoArray.push(array[i] * array[i])
//     }
//   }
// 	return novoArray
// }

// EXERCÍCIO 03

// Minha lógica

function retornaNumerosPares(array) {
    const arrayPar = []
        for  (let i = 0; i < array.length; i++){
          if (array[i] % 2 === 0)
              arrayPar.push(array[i])
        }
    return arrayPar
}

// ************* Lógica sugerida pela lista de revisão ***************

// function retornaNumerosPares(array) {
// 	let novoArray = [];
// 	for(let i = 0; i < array.length; i++) {
// 		if(array[i] % 2 === 0) {
// 	      novoArray.push(array[i])
// 	  }
//   }
// 	return novoArray
// }

// EXERCÍCIO 04

// Minha lógica

function retornaMaiorNumero(array) {
   let maiorNumero = 0
      for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
           maiorNumero = array[i]
         }
      }
  return(maiorNumero)
}

// ************* Lógica sugerida pela lista de revisão ***************

// function retornaMaiorNumero(array) {
//   let maiorNumero = array[0]
//   for (let i = 0;i < array.length;i++) {
//     if (maiorNumero < array[i]) {
//       maiorNumero = array[i]
//     }
//   }
//   return maiorNumero
// }

// EXERCÍCIO 05

// Minha lógica

function retornaQuantidadeElementos(array) {
    return array.length
}

// ************* Lógica sugerida pela lista de revisão ***************

// function retornaQuantidadeElementos(array) {
// 	return array.length
// }

// EXERCÍCIO 06

// Minha lógica

function retornaExpressoesBooleanas() {

      const booleano1 = true
      const booleano2 = false
      const booleano3 = !booleano2 
      const booleano4 = !booleano3 
    
      const resp1 = booleano1 && booleano2 && !booleano4
      const resp2 = (booleano1 && booleano2) || !booleano3
      const resp3 = (booleano2 || booleano3) && (booleano4 || booleano1)
      const resp4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
      const resp5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

    const arrayRespota = [resp1, resp2, resp3, resp4, resp5]

  return arrayRespota

}

// ************* Lógica sugerida pela lista de revisão ***************

// function expressoesBooleanas() {
//   const respostas = [true, true, true, true, false]
//   return respostas
// }

// EXERCÍCIO 07

// Minha lógica

function retornaNNumerosPares(n) {
 
    let retornaPares = []
      for (let i = 0; i < n; i++){
       retornaPares.push(i * 2)
      }
  return retornaPares
}

retornaNNumerosPares(3)

// ************* Lógica sugerida pela lista de revisão ***************

// function retornaNNumerosPares(n) {
//   const novoArray = [];
//   for(let number = 0; novoArray.length < n; number++) {
//    if(number % 2 === 0) {
//      novoArray.push(number)
//    }
//   }
//   return novoArray
//  }

// EXERCÍCIO 08

// Minha lógica

function checaTriangulo(a, b, c) {
    if (a === b && a === c){
        return "Equilátero"

    } else if (a === b || b === c || a === b){
        return "Isósceles"
            
    } else if ( a !== b || a !== c || b !== c){
        return "Escaleno" 
    }
}

// ************* Lógica sugerida pela lista de revisão ***************

// function checaTriangulo(a, b, c) {
//   if(a !== b && b !== c) {
//    return'Escaleno'
//   } else if(a === b && b === c) {
//     return'Equilátero'
//    } else {
//      return'Isósceles'
//    }
//  }

// EXERCÍCIO 09

// Minha lógica

 function compararDoisNumeros(num1, num2) {
  
   let comparacao = {
     maiorNumero: 0,
     maiorDivisivelPorMenor: false,
     diferenca: 0
   }

     if (num1 > num2) {
        comparacao.maiorNumero = num1
        comparacao.maiorDivisivelPorMenor = (num1 % num2 === 0)
        comparacao.diferenca = num1 - num2

     } else if (num2 > num1) {
        comparacao.maiorNumero = num2
        comparacao.maiorDivisivelPorMenor = (num2 % num1 === 0)
        comparacao.diferenca = num2 - num1
     } else if ( num1 === num2 ) {
        comparacao.maiorNumero = num2 
        comparacao.maiorDivisivelPorMenor = (num1 === num2)
        comparacao.diferenca = num1 - num2  
     }
     return comparacao
   }

// ************* Lógica sugerida pela lista de revisão ***************


// function comparaDoisNumeros(num1, num2) {
//   let maiorNumero
//    let menorNumero
//    let maiorDivisivelPorMenor
 
//    if (num1 > num2) {
//      maiorNumero = num1
//      menorNumero = num2
//    } else {
//      maiorNumero = num2
//      menorNumero = num1
//    }
 
//    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
 
//    const diferenca = maiorNumero - menorNumero
 
//    return {
//      maiorNumero: maiorNumero,
//      maiorDivisivelPorMenor: maiorDivisivelPorMenor,
//      diferenca: diferenca
//    }
//  }

// EXERCÍCIO 10

// Minha lógica

// function segundoMaiorEMenor(array) {

//     let menor = Infinity
//     let maior = -Infinity
//     let segundoMenor = Infinity
//     let segundoMaior = -Infinity
//     let novoArray = []
  
//     for (let i of array) {
//       if (i < menor) {
//         menor = i
//       }
//       if (i > maior) {
//         maior = i
//       }
//     }
  
//     for (let i of array) {
//       if (i < segundoMenor && i !== menor) {
//         segundoMenor = i
//       }
//       if (i > segundoMaior && i !== maior) {
//         segundoMaior = i
//       }
//     }
//     novoArray.push(segundoMaior)
//     novoArray.push(segundoMenor)
  
//     return novoArray
//   }
  


// EXERCÍCIO 11

// ************* Lógica sugerida pela lista de revisão ***************

// function ordenaArray(array) {
//     const len = array.length
//     for (let i = 0;i < len;i++) {
//       for (let j = 0;j < len;j++) {
//         if (array[j] > array[j + 1]) {
//           let tmp = array[j]
//           array[j] = array[j + 1]
//           array[j + 1] = tmp
//         }
//       }
//     }
//     return array
//   }


// EXERCÍCIO 12

// Minha lógica

function filmeFavorito() {
    const informacoesFilme = {
      nome: "O Diabo Veste Prada" ,
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"],
    }
  return informacoesFilme
}

// ************* Lógica sugerida pela lista de revisão ***************

// function filmeFavorito() {
//   const filme = {
//      nome: 'O Diabo Veste Prada',
//      ano: 2006,
//      diretor: 'David Frankel',
//      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
//    }
 
//   return filme
//  }

// EXERCÍCIO 13

// Minha lógica

function imprimeChamada() {
    const informacoesFilme = {
      nome: "O Diabo Veste Prada" ,
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"],
    }
  return `Venha assistir ao filme ${informacoesFilme.nome}, de ${informacoesFilme.ano}, dirigido por ${informacoesFilme.diretor} e estrelado por ${informacoesFilme.atores}.`
}

// ************* Lógica sugerida pela lista de revisão ***************

// function imprimeChamada() {
//   const filme = {
//     nome: 'O Diabo Veste Prada',
//     ano: 2006,
//     diretor: 'David Frankel',
//     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
//   }

//   let atoresConcat = ""
//   for (let i = 0;i < filme.atores.length;i++) {
//     if (i === filme.atores.length - 1) {
//       atoresConcat += filme.atores[i]
//     } else {
//       atoresConcat += filme.atores[i] + ", "
//     }
//   }

//   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`
// }

// EXERCÍCIO 14

// Minha lógica

 function criaRetangulo(lado1, lado2) {
   let largura = lado1
   let altura = lado2
   let perimetro = 2 * (lado1 + lado2)
   let area = lado1 * lado2

  return `largura: ${largura}, altura: ${altura}, perimetro: ${perimetro}, area: ${area}`
 }

// ************* Lógica sugerida pela lista de revisão ***************

// function criaRetangulo(lado1, lado2) {
//   const retangulo = {
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2 * (lado1 + lado2),
//     area: lado1 * lado2
//   }

//   return retangulo
// }


// EXERCÍCIO 15

// Minha lógica

function anonimizaPessoa(pessoa) {

   let inverteNomePessoa = {
     ...pessoa,
     nome: "ANONIMO",
   }
   return inverteNomePessoa
}

// ************* Lógica sugerida pela lista de revisão ***************
//  function anonimizaPessoa(pessoa) {
//  return {
//     ...pessoa,
//     nome: 'ANÔNIMO'
//   }
// }

  
// EXERCÍCIO 16A

// Minha lógica

function maioresDe18(arrayDePessoas) {
    let maiorIdade = arrayDePessoas.filter((item, index, array) => {
      return item.idade >= 18
    })
  return maiorIdade
}

// ************* Lógica sugerida pela lista de revisão ***************

// function maioresDe18(arrayDePessoas) {
//   const novoArray = arrayDePessoas.filter((pessoa) => {
//     return pessoa.idade >= 18
//   })
//   return novoArray
// }

// EXERCÍCIO 16B

// Minha lógica

function menoresDe18(arrayDePessoas) {
  let menorIdade = arrayDePessoas.filter((item, index, array) => {
    return item.idade < 18
})
return menorIdade
}

// ************* Lógica sugerida pela lista de revisão ***************

// function menoresDe18(arrayDePessoas) {
//   const novoArray = arrayDePessoas.filter((pessoa) => {
//     return pessoa.idade < 18
//   })
//   return novoArray
// }

// EXERCÍCIO 17A

// Minha lógica

let array = [1, 2, 3, 4, 5, 6]
function multiplicaArrayPor2(array){
  let multiplicaPorDois = array.map(item  => item * 2)
  return multiplicaPorDois
}

// ************* Lógica sugerida pela lista de revisão ***************

// function multiplicaArrayPor2(array) {
//   const novoArray = array.map((num) => {
//    return num * 2
//    })
//   return novoArray
//  }
 

// EXERCÍCIO 17B

// Minha lógica

function multiplicaArrayPor2S(array) {
  let multiplicaPorDois = array.map(item => item * 2).toString
  return multiplicaPorDois
}

// ************* Lógica sugerida pela lista de revisão ***************

// function multiplicaArrayPor2S(array) {
// const novoArray = array.map((num) => {
//   return(num * 2).toString()
//   })
//  return novoArray
// }

// EXERCÍCIO 17C

// Minha lógica

function verificaParidade(array) {

 let novoArray = array.map((item, index, array) => {
      if (item % 2 === 0){
        return `${item} é par`
      } else{ 
        return `${item} é ímpar`
        } 
    })
   return novoArray
 }

 // ************* Lógica sugerida pela lista de revisão ***************

// function verificaParidade(array) {
//     const novoArray = array.map((num) => {
//       if (num % 2 === 0) {
//         return `${num} é par`
//       } else {
//         return `${num} é ímpar`
//       }
//     })
//   return novoArray
//   }


// EXERCÍCIO 18A

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]
function retornaPessoasAutorizadas(pessoas) {
  const permissao = pessoas.filter(pessoas => pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura >= 1.5) 
  return permissao
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
    const semPermissao = pessoas.filter(pessoas => pessoas.idade < 15 || pessoas.idade > 60 || pessoas.altura <= 1.5) 
    return semPermissao
  }


// EXERCÍCIO 19A

// Minha lógica

 const consultas = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 function ordenaPorNome(consultasNome) {
  let ordemAlfabetica = consultas.map(item => item.sort()) 
   return ordemAlfabetica
 }

 // ************* Lógica sugerida pela lista de revisão ***************

// function ordenaPorNome(consultasNome) {
//   for(let i = 0; i < consultasNome.length; i++) {
//     for(let j = 0; j < consultasNome.length - i - 1; j++) {
//       if(consultasNome[j].nome > consultasNome[j + 1].nome) {
//         const temp = consultasNome[j]
//         consultasNome[j] = consultasNome[j + 1]
//         consultasNome[j + 1] = temp
//       }
//     }
//   }
//   return consultasNome
// }

// EXERCÍCIO 19B

// ************* Lógica sugerida pela lista de revisão ***************

  // function ordenaPorData(consultasData) {
  //   for(let i = 0; i < consultasData.length; i++) {
  //     for(let j = 0; j < consultasData.length - i - 1; j++) {
  
  //       const arrayData1 = consultasData[j].dataDaConsulta.split('/')
  //       const dia1 = Number(arrayData1[0])
  //       const mes1 = Number(arrayData1[1])
  //       const ano1 = Number(arrayData1[2])
  
  //       const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/')
  //       const dia2 = Number(arrayData2[0])
  //       const mes2 = Number(arrayData2[1])
  //       const ano2 = Number(arrayData2[2])
  
  //       const data1 = new Date(ano1, mes1 -1, dia1).getTime()
  //       const data2 = new Date(ano2, mes2-1, dia2).getTime()
  
  //       if(data1 > data2) {
  //         const temp = consultasData[j]
  //         consultasData[j] = consultasData[j + 1]
  //         consultasData[j + 1] = temp
  //       }
  //     }
  //   }
  //   return consultasData
  // }


// EXERCÍCIO 20

// ************* Lógica sugerida pela lista de revisão ***************

  // function calculaSaldo(contas) {
  //   contas.forEach((conta) => {
  //     let totalDeCompras = 0
  //     conta.compras.forEach((valor) => {
  //       totalDeCompras += valor
  //     })
  //     conta.saldoTotal -= totalDeCompras
  //   })
  //   return contas
  // }

// somar os indices do compras e subtrair do saldoTotal 