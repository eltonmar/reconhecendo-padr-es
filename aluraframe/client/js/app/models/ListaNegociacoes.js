class ListaNegociacoes {

    //a classe lista, vai criar uma lista vazia com todas as negociações
    constructor() {
        this._negociacoes = []
    }

    //o método abaixo irá adicionar cada negociação na lista criada acima
    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
    }
    
    //o metodo get consegue listar as negociacoes
    get negociacoes() {
        //o array+concat faz com que ele não só mostre, mas crie uma lista com os arrays já adicionados, tornando impossivel que alguma negociacao seja alterada ou acrescentada por isso
        return [].concat(this._negociacoes)
    }
}