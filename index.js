import {cliente} from "./Cliente.js"
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new cliente("Ricardo" ,11122233309 );

const cliente2 = new cliente("Alice" ,88877766609);



const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);

const conta2 = new contaCorrente(cliente2, 1001);

  
contaCorrenteRicardo.depositar(1000);
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.transferir(500,conta2);
console.log(contaCorrenteRicardo.saldo);
console.log(conta2)

console.log(cliente2.cpf)
console.log(contaCorrenteRicardo)
console.log(contaCorrente.numerosContas)


