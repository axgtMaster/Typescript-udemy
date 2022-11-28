class Animal{
    nombre:string
    tamano:number

    constructor(_nombre:string, _tamano:number){
        this.nombre = _nombre
        this.tamano =_tamano
    }

    moverse():void{
        console.log('Me estoy moviendo');
    }
}