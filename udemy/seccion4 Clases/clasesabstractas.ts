abstract class Vehiculos {
    abstract Acelera():void
    frena():void{
        console.log('Este auto esta frenando')
    }
}

class CityCar extends Vehiculos{
      constructor(){
          super()
      }

      Acelera():void{
          console.log('Este auto esta acelerando')
      }

}

class Furgon extends Vehiculos{
    constructor(){
        super()
    }

    Acelera():void{
        console.log('Este auto no acelera mucho')
    }
}


const auto = new  Furgon()
auto.Acelera()
