// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    const altura = Number(prompt('Altura:')) 
    const largura = Number(prompt ('Largura:'))

    const areaRetangulo = altura * largura
    console.log(areaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Ano atual:'))
  const anoNasc = Number(prompt('Ano do nascimento:'))
  const idade = anoAtual - anoNasc

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso1, altura1) {
  // implemente sua lógica aqui
  const peso = Number(prompt('Peso:')) 
  const altura = Number(prompt ('Altura:'))

  
  return peso1 / (altura1 * altura1)
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Nome:')
  const idade = prompt('Idade:')
  const email = prompt ('EMail:')
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  
  console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFav1 = prompt('Cor1:')
  const corFav2 = prompt('Cor2:')
  const corFav3 = prompt('Cor3:')
  const cores = [`${corFav1}`, `${corFav2}`, `${corFav3}`]

  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringM = string.toUpperCase()
  
  return stringM
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressoVendido = custo / valorIngresso

  return ingressoVendido

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const mesmoTamanho = string1 >= string2

  return mesmoTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]

  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length -1]

  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const listaTroca = array

  const primeiraPosicao = listaTroca[0]
  const ultimaPosicao = listaTroca[array.length -1]

  listaTroca[array.length -1] = primeiraPosicao
  listaTroca[0] = ultimaPosicao

  return listaTroca

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  verifica = (string1.toLowerCase() === string2.toLowerCase())

  return verifica

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Ano atual:'))
  const anoNasc = Number(prompt('Ano do nascimento:'))
  const anoRgEmissao = Number(prompt('Ano emissão RG:'))

  const idade = anoAtual - anoNasc
  const tempoEmissaoRg = anoAtual - anoRgEmissao

  const pessoas20 = idade <= 20 && tempoEmissaoRg >=5
  const pessoas20A50 = idade > 20 && idade <= 50 && tempoEmissaoRg >=10
  const pessoasMais50 = idade > 50 && tempoEmissaoRg >=15

  const precisaRenovar = pessoas20 || pessoas20A50 || pessoasMais50

  console.log(precisaRenovar)
    
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 != 0)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const mais18 = prompt('Você tem mais de 18 anos?') === 'sim'
  const ensinoMedioCompleto = prompt('Possui ensino médio completo?') === 'sim'
  const disponibilidadeExclusiva = prompt('Possui disponibilidade Exclusiva?') === 'sim'

  const comparar = mais18 && ensinoMedioCompleto && disponibilidadeExclusiva

  console.log (comparar)


}