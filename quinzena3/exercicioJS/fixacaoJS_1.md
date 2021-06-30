ˋˋˋ 
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

    salarioFixo = 2000
        if (qtdeCarrosVendidos !== 0) {
             let valorCarro = valorTotalVendas / qtdeCarrosVendidos
             let comissao = qtdeCarrosVendidos * (100 + valorCarro * 0.05)
             let salarioFinalMes = comissao + salarioFixo
           return salarioFinalMes
        }else{
           return salarioFixo
      }
    }

 ˋˋˋ 