var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculos = /** @class */ (function () {
    function Vehiculos() {
    }
    Vehiculos.prototype.frena = function () {
        console.log('Este auto esta frenando');
    };
    return Vehiculos;
}());
var CityCar = /** @class */ (function (_super) {
    __extends(CityCar, _super);
    function CityCar() {
        return _super.call(this) || this;
    }
    CityCar.prototype.Acelera = function () {
        console.log('Este auto esta acelerando');
    };
    return CityCar;
}(Vehiculos));
var Furgon = /** @class */ (function (_super) {
    __extends(Furgon, _super);
    function Furgon() {
        return _super.call(this) || this;
    }
    Furgon.prototype.Acelera = function () {
        console.log('Este auto no acelera mucho');
    };
    return Furgon;
}(Vehiculos));
var auto = new Furgon();
auto.Acelera();
