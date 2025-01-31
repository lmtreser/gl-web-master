/*  PROMESAS
    Viernes 14 de enero de 2022
*/

// Construimos una función que retorna una promesa
// error es un parametro, resolve y reject son callbacks
const getData = (error) => new Promise((res, rej) => {
    if (!error) {
        setTimeout(() => {
            res({
                nombre: 'Martin',
                apellido: 'Gomes'
            });
        }, 3000);
    } else {
        rej('No se pueden obtener datos')
    }
});

// then y catch son métodos de la promesa que reciben callbacks
// then se devuelve en caso de resolverse exitosamente
// catch en caso de existir algún error.
console.log("Inicio del proceso");
getData(false)
    .then((datos) => console.log(datos))
    .catch((error) => console.log(error))
console.log("Fin del proceso");