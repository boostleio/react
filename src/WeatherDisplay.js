import React from 'react';

function WeatherDisplay({ weather }) {
    return (
        <div className="weather-display">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>{weather.main.temp} °C</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
        </div>
    );
}

export default WeatherDisplay;
