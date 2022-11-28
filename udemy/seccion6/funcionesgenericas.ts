function mostrar(dato:string):string{
    return dato 
}

console.log(mostrar('Hola'))


function mostrarGenerica<T>(dato:T):T{
    return dato
}

console.log(mostrarGenerica(false))