/*  ALGUNOS OPERADORES
    Viernes 14 de enero de 2022
*/

// Operador de concatenación +
console.log("Hola " + "mundo");

// Operador condicional ?: condicion ? valor 1 : valor 2
console.log(2 > 3 ? "2 es mayor" : "2 es menor");

// Operadorador de desestructuración
var persona = {
    nombre: "Pedro",
    apellido: "Gomes",
    edad: 27
};

var { nombre } = persona; // Extrae un valor de un objeto
var { nombre, edad } = persona; // Extrae mas de un valor de un objeto
var { apellido: dato } = persona; // Extrae y le cambia el nombre a la variable de desestructuración
console.log(nombre);
console.log(dato);
console.log(edad);
console.log(persona);

// Operador de desestructuración de arreglos
var arreglo = [1, 2, 3, 4, 5, 6, 7, 8];
var [uno, dos] = arreglo;
console.log(uno);
console.log(dos);

// Operador de miembro o acceso de propiedad
var persona = {
    nombre: "Pedro",
    apellido: "Gomes",
    edad: 27
};
// Notación por punto
console.log(persona.nombre);
// Notación por corchete
console.log(persona['apellido']);

// Notación por corchete en arreglos
var arreglo = [0, 1, 2, 10, 20, 34];
console.log(arreglo[3]);

// Operador de determinación de tipo
console.log(typeof ("Hola mundo"));