/* Gráficos con CHART.JS
   https://www.chartjs.org/
*/

// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");

// Las etiquetas son las que van en el eje X. 
const etiquetas = ["10:00", "10:30", "11:00", "11:30", "12:00"]

// Podemos tener varios conjuntos de datos.
const datosSensor1 = {
    label: "Sensor #1",
    data: [12, 15, 18, 32, 12.5], // Arreglo que debe tener la misma cantidad de valores que las etiquetas
};

const datosSensor2 = {
    label: "Sensor #2",
    data: [22, 25, 28, 32, 32.5],
};

new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosSensor1,
            datosSensor2,
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Registro diario de temperatura',
                font: {
                    weight: 'bold',
                    size: 16
                },
            },
            subtitle: {
                display: true,
                text: 'Habitación principal'
            },
            legend: {
                position: 'bottom',
                align: 'center'
            },
            responsive: true,
        },
        elements: {
            point: {
                radius: 5,
                pointStyle: 'rect',
                borderWidth: 2,
                borderColor: 'rgba(0,0, 255, 1)',
            },
            line: {
                    borderDash: [10, 5],
                    borderWidth: 2,
                    borderColor: 'rgba(255,0,0, 1)',
                    backgroundColor: 'rgba(255,148,201, 0.5)', // Color de fondo
                    fill: true
                }
        },
        scales: {
            y: {
                min: 0,
                title: {
                    display: true,
                    text: 'Temperatura (°C)'
                },
                grid: {
                    borderDash: [20, 5, 20],
                },
                ticks: {
                    color: 'white',
                    backdropColor: 'blue',
                    showLabelBackdrop: true
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tiempo (Hs)'
                },
                grid: {
                    borderDash: [10, 5, 10],
                },
                ticks: {
                    color: 'white',
                    backdropColor: 'green',
                    showLabelBackdrop: true
                },
            },
        },
    }
});