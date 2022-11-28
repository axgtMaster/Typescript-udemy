interface Funcionario<T>{
    nombre:T
}

let str:Funcionario<String> = {nombre:'Rodolfo'}
let num:Funcionario<number> = {nombre:38}