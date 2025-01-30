const API_KEY = 'your_api_key'; // Replace with your API key
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const currentWeatherSection = document.getElementById('current-weather');
const forecastSection = document.getElementById('forecast');

// Fetch Weather Data
async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    displayCurrentWeather(data);
    fetchForecast(city); // Fetch 5-day forecast
}

// Display Current Weather
function displayCurrentWeather(data) {
    const { name, main, weather, wind } = data;
    currentWeatherSection.innerHTML = `
        <h2>Current Weather in ${name}</h2>
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Feels Like: ${main.feels_like}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
    `;
}

// Fetch 5-Day Forecast
async function fetchForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    displayForecast(data.list);
}

// Display 5-Day Forecast
function displayForecast(forecast) {
    const filteredForecast = forecast.filter(item => item.dt_txt.includes("12:00:00"));
    forecastSection.innerHTML = '<h2>5-Day Forecast</h2>';
    filteredForecast.forEach(day => {
        const date = new Date(day.dt_txt).toLocaleDateString();
        forecastSection.innerHTML += `
            <div>
                <p>${date}</p>
                <p>Temp: ${day.main.temp}°C</p>
                <p>${day.weather[0].description}</p>
            </div>
        `;
    });
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = searchBar.value.trim();
    if (city) fetchWeather(city);
});
