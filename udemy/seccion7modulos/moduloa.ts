export const nombre:string = 'Rodolfo'

export class Colaborador{
    nombre:string
}

export interface Humano{
    nombre:string
}

export const mostrar = (dato:string):string =>{
    return dato
}

class Alumno{
    nombre:string
    edad:number
    curso:string

    constructor(nombre:string, edad:number, curso:string){
        this.nombre = nombre
        this.edad = edad
        this.curso = curso
    }

    mostrar(dato:number):number{
     return dato
    }
}

export default Alumno
