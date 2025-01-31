/*  CICLOS FOR IN Y FOR OF
    Viernes 14 de enero de 2022
*/

// Ciclo for in
let persona = {
    nombre: "Pepe",
    apellido: "Garcia",
    edad: 27
};

// for (variable que almacena cada clave, operador in que devuelve un booleano
// si encuentra la clave en el objeto)
for (let variable in persona) {
    console.log(variable);
}
// Es posible recorrer el objeto con la notación por corchete
for (let variable in persona) {
    console.log(variable, persona[variable]);
}

// Ciclo for of, recorre un arreglo
let arreglo = [0, 1, 2, 3, 4, 5];
for (let variable of arreglo) {
    console.log(variable);
}

// Ciclo for of, recorre un string
let nombre = "Pedro"
for (let variable of nombre) {
    console.log(variable);
}