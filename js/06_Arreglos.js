/*  MANIPULACIÓN DE ARREGLOS
    Viernes 14 de enero de 2022
*/

// Creación de un arreglo
var arreglo = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// Devuelve la cantidad de elementos que tiene el arreglo
console.log(arreglo.length);

// ForEach, usará cada elemento del arreglo como parámetro de la función flecha
arreglo.forEach((elemento) => console.log(elemento));

// Funciones mutables, modifican el arreglo
var arreglo = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arreglo.push('h');  // Agrega un elemento al final
arreglo.shift();    // Elimina el primer elemento y lo retorna
arreglo.pop();      // Elimina el último elemento y lo retorna
console.log(arreglo);

// Función map, es inmutable, no modifica el arreglo original sino que crea un nuevo
var arreglo = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var nuevoArreglo = arreglo.map((letras) => {
    return letras;
});
console.log(nuevoArreglo);

// Filter, inmutable
var estudiantes = [
    { nombre: "Pedro", edad: 19, matriculado: true },
    { nombre: "Pepe", edad: 20, matriculado: false },
    { nombre: "Matias", edad: 21, matriculado: true },
    { nombre: "Laura", edad: 22, matriculado: false },
    { nombre: "Marta", edad: 23, matriculado: true },
];
// Recorremos el arreglo y de acuerdo a una condición generamos uno nuevo de arreglo
var filtrar = estudiantes.filter((estudiante) => estudiante.matriculado == true);
console.log(filtrar);

// Reduce, reduce el arreglo a un sólo valor
var arreglo = [10, 20, 30, 40, 50];
var suma = arreglo.reduce((acumulador, numeros) => acumulador + numeros, 0);
console.log(suma);

// Función some, verifica si al menos uno de los elementos del arreglo cumple 
// con una condición y devuelve un booleano.
var arreglo = [10, 20, 30, 40, 50];
var resultado = arreglo.some((numero) => numero > 35);
console.log(resultado);

// Función every, verifica si todos los elementos de un arreglo cumplen con
// una condición y devuelve un booleano.
var arreglo = [10, 20, 30, 40, 50];
var resultado = arreglo.every((numero) => numero > 35);
console.log(resultado);

// Función find, busca un elemento y el primero que coincide lo devuelve
var arreglo = [10, 20, 30, 40, 50];
var resultado = arreglo.find((numero) => numero > 25);
console.log(resultado);

// Función findIndex, busca la posición de un elemento y la devuelve
var arreglo = [10, 20, 30, 40, 50];
var resultado = arreglo.findIndex((numero) => numero > 35);
console.log(resultado);

// Función includes, busca si un elemento está en el arreglo y devuelve un booleano
var arreglo = [10, 20, 30, 40, 50];
var resultado = arreglo.includes(30);
console.log(resultado);

// Función join, concatena los elementos de un arreglo, el parámetro es el simbolo
// que utiliza para concatenar.
var arreglo = [10, 20, 30, 40, 50];
var resultado = arreglo.join('.');
console.log(resultado);

// Función concat, concatena arreglos
var arreglo1 = [10, 20, 30, 40, 50];
var arreglo2 = [100, 200, 300, 400, 500];
var arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);

// Función sort, ordena los elementos mediante el código ASCII
var arreglo = [109, 108, 100, 200, 500];
console.log(arreglo.sort());

// Función splice, remueve o modifica elementos
var arreglo = [109, 108, 100, 200, 500];
console.log(arreglo.splice(1));