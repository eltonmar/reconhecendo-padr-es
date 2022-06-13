class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = new ListaNegociacoes()
    }

    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario()
        console.log(this._listaNegociacoes.negociacoes)
    }
    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }
    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
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
    o ... é um spread que irá passar por todos os valores do Array*/