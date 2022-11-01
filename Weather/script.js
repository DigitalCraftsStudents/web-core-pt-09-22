async function fetchWeather() {
    try {
        const results = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=f95326dadf640fd43d0a530bda107ba5&units=imperial");
        const weatherData = await results.json();
        const cityName = weatherData.name;
        const currentTemp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const weatherElement = document.getElementById("weather");
        weatherElement.innerHTML = `<p>The current temperature in ${cityName} is ${currentTemp}. It is ${weatherDescription}.</p>`
    } catch (error) {
        console.log("Something went wrong fetching the weather API", error)
    }
}

fetchWeather();