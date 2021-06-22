/************************************************************************************************************
                            
                              Exercícios de interpretação de código   

1. 

   Irá aparecer no console item por item do array usuarios, mostrando para nós
o item, seu indíce e o array inteiro a qual ele faz parte. 

2. 

   Aparecerá no console um novo array contendo apenas os nomes do array usuarios. 
Isso irá ocorrer pois o return chama o parâmetro item mas selecionando apenas 
o que está dentro da propriedade nome do array objeto. 

3. 
 
   Neste exemplo irá retornar um novo array apenas com os nomes e apelidos que tenham o a
 pelido diferente de chijo. A funçao filter irá filtrar as informacões do array original 
 retornando apenas o parâmetro item, após isso o return irá mostrar o array inteiro menos
 o indice que tiver Chijo declarada em alguma propriedade, no caso seria as duas primeiras 
 linhas. 

 { nome: "Amanda Rangel", apelido: "Mandi" },
 { nome: "Laís Petra", apelido: "Laura" },


 const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

************************************************************************************************************/

/*                               Exercícios de escrita de código

// 1.

 const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

// A)

   const nomeDoguinhos = pets.map((item, index, pets) => {
            return item.nome
   })
   console.log(nomeDoguinhos)

// B)

   const salsichas = pets.filter((item, index, pets) => {
            return item.raca === "Salsicha"
   })
   console.log(salsichas)

// C)

   const poodle = pets.filter((item, index, pets) => {
         return item.raca === "Poodle"
   }).map((mensagemPoodle) => {
         return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${mensagemPoodle.nome}!`)
   })
   podle()
*/

// 2.

// A) 

   const produtos = [
      { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
      { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
      { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
      { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
      { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
      { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
      { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
      { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
      { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
      { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
   ]

      let novosProdutos = [...produtos]
      const nomeProdutos = produtos.map((item) => {

      return console.log(item.nome)
   })

// B

      let novosProdutos1 = [...produtos]
      let excluiCategoria = novosProdutos1.map((item) => {
      // delete item.categoria
   })
      let precoFiltrado = novosProdutos1.filter((item, index, array) => {
         item.preco = item.preco - item.preco*0.5

      return array
   })
      console.log(precoFiltrado)

// C)

      let novosProdutos2 = [...produtos]
      let apenasBebidas = novosProdutos2.filter((item, index,array) => {

      return item.categoria === "Bebidas"
   })
      console.log(apenasBebidas)

// D)
      let novosProdutos3 = [...produtos]
      let apenasYpe = novosProdutos3.filter((item, index, array) => {

      return item.nome.includes("Ypê")
   })
      console.log(apenasYpe)
   
// E)

      let novosProdutos4 = [...produtos]
      let frase = novosProdutos4.filter((item, index, array) => {

      return item.nome.includes("Ypê")
   })
      frase.map((item, index, array) => {

      return console.log(`Compre ${item.nome} por ${item.preco}0 reais`)
   })
      console.log(frase)
   