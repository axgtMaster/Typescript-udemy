interface Persona{
    nombre:string
    apellido: string
}

function caminar(persona:Persona):void{
    console.log('la persona ' + persona.nombre + ' esta caminando')
}

let nueva_persona = {nombre: 'Rodolfo', apellido: 'Salazar', edad:30}
caminar(nueva_persona)

let nueva_personas:Persona = {nombre: 'Rodolfo', apellido: 'Salazar'}
caminar(nueva_persona)

