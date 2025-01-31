/*  FUNCIONES
    Viernes 14 de enero de 2022
*/

// Función declarativa
function nombre() {
    console.log("Hola mundo");
}
nombre();

// Función con parámetros
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Pedro");

// Retornar valor
function saludar(nombre) {
    return `Hola ${nombre}`;
}

var saludo = saludar("Pedro");
console.log(saludo);

// Funciones de expresión, sin nombre o anónimas
var suma = function (a, b) {
    return a + b;
}
console.log(suma(5, 3));

// Funciones flecha (arrow), alternativa para compactar una función de expresión
var restar = (parametro1, parametro2) => {
    return parametro1 - parametro2;
}
console.log(restar(10, 2));

// Funciones flecha (arrow), el return es implicito
var division = (parametro1, parametro2) => parametro1 / parametro2;
console.log(division(10, 2));