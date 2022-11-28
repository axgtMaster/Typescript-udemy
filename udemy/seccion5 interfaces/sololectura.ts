interface Paciente{
    readonly nombre:string
    readonly apellido:string
}

let paciente:Paciente = {nombre:'Javiera', apellido:'Salazar'}
//paciente.nombre = 'Jose'
console.log(paciente)