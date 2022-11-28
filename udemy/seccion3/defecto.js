//parametros por defecto
var defecto = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 12; }
    return "Se llama " + nombre + " se apellida " + apellido + " y tiene " + edad + " a\u00F1os";
};
console.log(defecto('Fernanda', 'Salazar', 9));
console.log(defecto('Fernanda', 'Salazar'));
