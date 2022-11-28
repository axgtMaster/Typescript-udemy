var vehiculo = /** @class */ (function () {
    function vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    vehiculo.prototype.acelerar = function () {
        console.log('ojo que Acelero');
    };
    vehiculo.prototype.frenar = function () {
        console.log('ojo que Freno');
    };
    return vehiculo;
}());
var coche = new vehiculo('Ford', '06/01/2012', 5);
coche.marca;
coche.acelerar();
