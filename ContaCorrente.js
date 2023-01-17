import { cliente } from "./Cliente.js";

export class contaCorrente{
    agencia;
    _saldo = 0;
    _cliente;
    static numerosContas = 0;



    set cliente(novoValor){
        if(novoValor instanceof cliente){
        this._cliente = novoValor;
        }
    }

    get cliente(){
        this._cliente
    }
    
    get saldo(){
        return this._saldo
    }

    constructor(cliente, agencia){
    this.agencia = agencia;
    this.cliente = cliente
    contaCorrente.numerosContas += 1;
    }
    sacar(valor){
    if (this._saldo >= valor){
    this._saldo -= valor;
    return valor;
       }
    }

    depositar(valor){
        if(valor <= 0 ) return;
        this._saldo += valor;
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}