let chart1 = document.getElementById('grafica1').getContext('2d');
let chart2 = document.getElementById('grafica2').getContext('2d');

let poblacion = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ['Olavarria', 'Mar del Plata', 'Gran La Plata', 'Balcarce', 'Necochea', 'Tandil'],
        datasets: [{
            label: 'Población',
            data: [
                89721,
                593337,
                787294,
                38376,
                73557,
                123871
            ],
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Ciudades más pobladas',
            },
            responsive: true
        }
    }
});

let browsers = new Chart(chart2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [60, 18, 10, 8, 4],
            backgroundColor: ['#42a5f5', 'red', 'green', 'blue', 'violet'],
            label: 'Comparacion de navegadores'
        }],
        labels: ['Google Chrome', 'Safari', 'Edge', 'Firefox', 'Opera']
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Navegadores populares',
            },
            responsive: true
        }
    }
});