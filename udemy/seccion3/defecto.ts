//parametros por defecto
const defecto = (nombre:string, apellido:string, edad:number =  12)=>{
    return `Se llama ${nombre} se apellida ${apellido} y tiene ${edad} años`
}

console.log(defecto('Fernanda', 'Salazar', 9))
console.log(defecto('Fernanda', 'Salazar'))