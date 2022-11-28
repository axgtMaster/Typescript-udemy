interface Persona{
    altura:number
    peso:number
    nom?:string
}

let persona = {altura:2,peso:60,nom:'Marcela'}

function MostrarMediaPeso(persona:Persona):string{
    let mediapeso:number = persona.altura / persona.peso

    if (persona.nom){
        return `${persona.nom} tiene una media de ${mediapeso}`
    }else{
        return `No se quien eres pero tienes una media de ${mediapeso}`
    }
}

console.log(MostrarMediaPeso(persona))