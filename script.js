function generateFibonacci() {
    let input = document.getElementById('fibonacci-input').value;

    if (isNaN(number) || number < 1) {
        alert("Por favor ingrese un número válido mayor que 0");
        return;
    }

    let fibonacciSeries = getFibonacciSeries(number);

    document.getElementById('fibonacci-series').innerText = fibonacciSeries.join(', ');
}

function getFibonacciSeries(n) {
    let series = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            series.push(0);
        } else if (i === 1) {
            series.push(1);
        } else {
            series.push(series[i - 1] + series[i - 2]);
        }
    }
    return series;
}
