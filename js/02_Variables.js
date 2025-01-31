/*  VARIABLES
    Tres formas para definirlas: var, let, const
    Viernes 14 de enero de 2022
    */

// Almacenar un string
var nombre = 'Pancho';
console.log(nombre);

// Almacenar un objeto
var persona = {
    nombre: 'Pancho',
    edad: 27,
    nacionalidad: 'Argentina',
    direccion: {
        calle: 'Av. Luro',
        numero: 5400
    },
    estudios: [
        'primario', 'secundario', 'terciario']
}
console.log(persona);

// Variables con let, sólo funcionan dentro de un bloque de código (local)
{
    let nombre = 'Pedro';
    console.log(nombre);
}
console.log(nombre);

// Constantes (const)
const PI = 3.14;
console.log(PI);

// Variables dentro de variables, con ${}. 
var nombre = "Pedro";
var saludo = `Hola, ¿como estás ${nombre}?
...`;   // Es posible utilizar espacios y saltos de línea
console.log(saludo);