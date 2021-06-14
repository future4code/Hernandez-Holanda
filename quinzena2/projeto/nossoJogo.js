/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    

    alert ("Bem vindo ao jogo de BlackJack!")
      
   let resposta = (confirmar ("Quer iniciar uma nova rodada?")) 
    if (resposta === true) {
       alert ("Vamos iniciar uma nova rodada!")
    } else if (resposta === false) {
       alerta ("O jogo acabou!")
    }
   
    
      const carta1Usuario = comprarCarta ()
      const carta2Usuario = comprarCarta ()
      const carta1Computador = comprarCarta ()
      const carta2Computador = comprarCarta ()
   
   let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor
   
   console.log (`Usuário - cartas: $ {carta1Usuario.texto} $ {carta2Usuario.texto} - pontuação $ {pontuacaoUsuario} \ n Computador - cartas: $ {carta1Computador.texto} $ {carta2Computador.texto} - pontuação $ {pontuacaoComputador } `)
   if (somaDasCartasUsuario> somaDasCartasComputador) {
      console.log ("O usuário ganhou!")
   } else if (somaDasCartasUsuario <somaDasCartasComputador) {
      console.log ("O computador ganhou!")
   } else if (somaDasCartasUsuario === somaDasCartasComputador) {
      console.log ("Empate!")
   }
   
   


