async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '4f02a3b1678d93b9a6f087259c482e57';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('weather-info').innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <div class="weather-box">
                <p><i class="fas fa-thermometer-half"></i> <strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><i class="fas fa-tint"></i> <strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><i class="fas fa-wind"></i> <strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            </div>
        `;
    } catch (error) {
        document.getElementById('weather-info').innerHTML = '<p>City not found</p>';
    }
}

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});