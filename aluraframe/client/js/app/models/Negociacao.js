class Negociacao { 

    constructor (data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this)

    }
    get volume() { 
        return this._valor * this._quantidade
    }

    get data (){
        //colocar essas informações para a determinação da data, ele impede que seja alterada por qualquer acesso ao objeto
        return new Date(this._data.getTime())
    }
    get quantidade (){
        return this._quantidade
    }
    get valor (){
        return this._valor
    }
    
}

/*
let n1 = new Negociacao(new Date(), 5, 100)

console.log(n1.data)
console.log(n1.valor)
console.log(n1.quantidade)
console.log(n1.volume)

//essa alteração é possível, pois o Object.freeze, congela apenas os Objetos que foram informados, e não as propriadades dele.
//como as propriedades foram acessadas abaixo, nos permitiu alterar o objetedo como um todo

n1.data.setDate(11)
console.log(n1.data)

let volume = n1.obtemVolume()
console.log(volume)
*/
