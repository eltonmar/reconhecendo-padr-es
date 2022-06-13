class DateHelper {
    //é um classe que diferente da NegociaçãoController, ela não pode ser instanciada !! 
    //somente poderá ser acessada através do parametros estáticos

    constructor () {
        //uma função de Erro, que será ativada sempre que alguem tentar acessar a essa parte do código.
        throw new Error('Essa Classe é um classe estática')
    }    
    static dataParaTexto(data) {
  
        return `${data.getDate()} / ${(data.getMonth()+1)} / ${data.getFullYear()}`
  
  }
  
  static textoParaData(texto) {
    //abaixo segue um expressa regurar para testa se o texto segue o padrao abaixo
  if(! /\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd')
    return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
  }}