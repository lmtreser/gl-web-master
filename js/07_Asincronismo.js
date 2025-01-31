/*  ASINCRONISMO
    Viernes 14 de enero de 2022
*/

// Simularemos varias tareas a ejecutar en modo concurrente no bloqueante
console.log("Tarea 1");
console.log("Tarea 2");
console.log("Tarea 3");
// Ejecuta una función cada cierto período de tiempo
setTimeout(() => {
    console.log("Tarea 4");
    console.log("Se ejecutó 2 segundos después");
}, 2000);
console.log("Tarea 5");

// Callbacks ejemplo 1
const suma = (a, b, cb) => cb(a + b);
const imprimir = (data) => console.log(data);
suma(1, 2, imprimir);

// Callbacks ejemplo 2
// Simularemos un proceso asincrono que demora 3 segundos en traer datos
const getData = (cb) => {
    setTimeout(() => {
        cb({
            nombre: "Usuario",
            edad: 27
        });
    }, 3000);
};

const imprimirData = (data) => console.log(data);
getData(imprimirData);