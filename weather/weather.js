document.addEventListener('DOMContentLoaded', function() {
    console.log("Weather widget initializing...");
    
    // Check if elements exist
    if (!document.getElementById('weatherApp')) {
        console.error("Weather app container not found!");
        return;
    }
    
    // Initialize with default location
    initWeatherWidget("London");
});

function initWeatherWidget(location) {
    const weatherApp = document.getElementById('weatherApp');
    
    // Show loading state
    weatherApp.innerHTML = `
        <div class="weather-loading">
            <i class="fas fa-cloud-sun"></i>
            <p>Loading weather for ${location}...</p>
        </div>
    `;
    
    // Fetch weather after short delay
    setTimeout(() => fetchWeather(location), 500);
}

function fetchWeather(location) {
    console.log("Fetching weather for:", location);
    
    // Mock data - replace with real API in production
    const weatherTypes = [
        { type: "sunny", temp: 25, desc: "Sunny", icon: "sun" },
        { type: "cloudy", temp: 18, desc: "Cloudy", icon: "cloud" },
        { type: "rainy", temp: 15, desc: "Rainy", icon: "cloud-rain" },
        { type: "stormy", temp: 20, desc: "Stormy", icon: "bolt" }
    ];
    
    const weather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    const tempVariation = Math.floor(Math.random() * 5) - 2; // -2 to +2
    
    const weatherData = {
        location: location,
        temp: weather.temp + tempVariation,
        description: weather.desc,
        humidity: 40 + Math.floor(Math.random() * 40), // 40-80%
        windSpeed: 5 + Math.floor(Math.random() * 15), // 5-20 km/h
        icon: weather.icon
    };
    
    displayWeather(weatherData);
}

function displayWeather(data) {
    const weatherApp = document.getElementById('weatherApp');
    const iconClass = getWeatherIcon(data.icon);
    
    weatherApp.innerHTML = `
        <div class="weather-card">
            <div class="weather-icon">
                <i class="fas ${iconClass}"></i>
            </div>
            <h3>${data.location}</h3>
            <div class="weather-temp">${data.temp}°C</div>
            <div class="weather-desc">${data.description}</div>
            <div class="weather-details">
                <div class="weather-detail">
                    <i class="fas fa-tint"></i>
                    <span>${data.humidity}%</span>
                </div>
                <div class="weather-detail">
                    <i class="fas fa-wind"></i>
                    <span>${data.windSpeed} km/h</span>
                </div>
            </div>
        </div>
    `;
}

function getWeatherIcon(weatherCondition) {
    const icons = {
        'sun': 'fa-sun',
        'cloud': 'fa-cloud',
        'rain': 'fa-cloud-rain',
        'bolt': 'fa-bolt',
        'storm': 'fa-poo-storm'
    };
    return icons[weatherCondition.toLowerCase()] || 'fa-cloud-sun';
}