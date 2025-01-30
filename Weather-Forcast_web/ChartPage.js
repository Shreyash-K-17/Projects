async function fetchForecastData(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const temps = data.list.filter(item => item.dt_txt.includes("12:00:00")).map(item => item.main.temp);
    const dates = data.list.filter(item => item.dt_txt.includes("12:00:00")).map(item => new Date(item.dt_txt).toLocaleDateString());
    renderChart(dates, temps);
}

// Render Forecast Chart
function renderChart(labels, data) {
    const ctx = document.getElementById('forecast-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Temperature (°C)',
                data,
                borderColor: 'blue',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}
