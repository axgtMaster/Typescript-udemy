"use strict";
exports.__esModule = true;
exports.mostrar = exports.Colaborador = exports.nombre = void 0;
exports.nombre = 'Rodolfo';
var Colaborador = /** @class */ (function () {
    function Colaborador() {
    }
    return Colaborador;
}());
exports.Colaborador = Colaborador;
var mostrar = function (dato) {
    return dato;
};
exports.mostrar = mostrar;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.mostrar = function (dato) {
        return dato;
    };
    return Alumno;
}());
exports["default"] = Alumno;
