const API_KEY = "d708e21d89dd18c860e0b448be659a4b"; // Replace with your key
const searchInput = document.getElementById('search');

// Function to fetch weather data
async function updateWeather(city = "Kumasi") {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            // Update UI elements
            document.getElementById('weather-desc').innerText = data.weather[0].description;
            document.getElementById('weather-info').innerText = `Currently experiencing ${data.weather[0].description} across ${data.name}. Temperatures are hovering near ${Math.round(data.main.temp)}°C.`;
            document.getElementById('city-name').innerText = data.name.toUpperCase();
            document.getElementById('temp').innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById('wind').innerText = data.wind.speed;
            document.getElementById('humidity').innerText = data.main.humidity;
            document.getElementById('visibility').innerText = data.visibility / 1000;
        } else {
            alert("City not found!");
        }
    } catch (err) 
        console.error("Fetch error:", err);
    }
}

// Search functionality
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        updateWeather(searchInput.value);
    }
});
		
// Initial Load
updateWeather();
