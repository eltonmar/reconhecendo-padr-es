class NegociacaoController {

    constructor () {
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')        
    }

    adiciona(event) {
        event.preventDefault();

        //console.log(typeof(this._inputData.value))
        //console.log(this._inputData.value)

        /*o ... é um spread que irá passar por todos os valores do Array*/
        var data = new Date (...
            this._inputData.value
            .split('-')
            .map((item) => {
                if (item ==1) {
                    return item -1
                } 
                return item

            }))
            
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value,
        )
        console.log(negociacao)
    
    }

}

/*
é um jeito de se fazer, mas a performance é piorada
//substituindo o document.queryselector por Jquery
        //o bind é usado para manter a associacao com o $
        let $ = document.querySelector.bind(document)
        let inputCampos = [
             /*
        console.log(this._inputData.value)
        console.log(this._inputQuantidade.value)
        console.log(this._inputValor.value)
            $('#data'),
            $('#quantidade'),
            $('#valor')
        ]
*/