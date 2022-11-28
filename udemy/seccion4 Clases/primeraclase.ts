class vehiculo {
    marca:string
    fecha:string
    puertas:number

    constructor(marca_:string, fecha_:string, puertas_:number){
        this.marca = marca_
        this.fecha = fecha_
        this.puertas = puertas_
    }

    acelerar():void{
        console.log('ojo que Acelero')
    }

    frenar():void{
        console.log('ojo que Freno')
    }
}

const coche = new vehiculo('Ford', '06/01/2012', 5)
coche.marca
coche.acelerar();