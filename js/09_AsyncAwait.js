/*  OTRA FORMA DE RESOLVER PROMESAS
    Viernes 14 de enero de 2022
*/

// Construimos una función que retorna una promesa
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

// Construimos una función asincrona
const main = async () => {
    try {
        let resultado = await getData(true)
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};

main();