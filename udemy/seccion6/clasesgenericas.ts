class Person<T>{
    nombre:string
    edad:T

    Mostrar(dato:T):T {
        return dato
    }
}

const obj = new Person()
obj.Mostrar(true)