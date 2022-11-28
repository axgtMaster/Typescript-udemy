function caminar(persona) {
    console.log('la persona ' + persona.nombre + ' esta caminando');
}
var nueva_persona = { nombre: 'Rodolfo', apellido: 'Salazar', edad: 30 };
caminar(nueva_persona);
var nueva_personas = { nombre: 'Rodolfo', apellido: 'Salazar' };
caminar(nueva_persona);
