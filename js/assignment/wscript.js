let weatherData = { city: "Kampar", country: "MY" };

const lat = 4.3;
const lon = 101.150002;
const apiKey = 'ac23d3b918d21c9d45076a820564c898';
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const kelvinConversion = 273.15;

// https://api.openweathermap.org/data/2.5/onecall?lat=4.3&lon=101.150002&appid=ac23d3b918d21c9d45076a820564c898

let weatherIcon = document.querySelector("#weather_icon");
let weatherCelsius = document.querySelector("#weather_celsius");
let weatherDesc = document.querySelector("#weather_desc");
let weatherLocation = document.querySelector("#weather_location");

window.addEventListener("load", (event) => {

    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            let currentWeather = data.current;

            weatherData.celsius = (currentWeather.temp - kelvinConversion).toFixed(1);
            weatherData.description = currentWeather.weather[0].main;
            weatherData.icon = currentWeather.weather[0].icon;
        })
        .then(function () {
            weatherIcon.innerHTML = `<img src='img/icons/weather_icons/${weatherData.icon}.png'/>`;
            weatherCelsius.innerHTML = `${weatherData.celsius}°<span>C</span>`;
            weatherDesc.innerHTML = weatherData.description;
            weatherLocation.innerHTML = `${weatherData.city}, ${weatherData.country}`;
        });
});
