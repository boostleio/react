import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

function App() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [unit, setUnit] = useState('metric');
    const [lastCity, setLastCity] = useState('');

    const fetchWeather = async (city) => {
        if (!city) {
            setError('City name cannot be empty');
            return;
        }
        if (city.toLowerCase() === lastCity.toLowerCase()) {
            setError('Already displaying weather for this city');
            return;
        }

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=${unit}`);
            const data = await response.json();
            if (data.cod !== 200) {
                setError('City not found');
                setWeather(null);
            } else {
                setWeather(data);
                setError(null);
                setLastCity(city);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setError('Failed to fetch weather data');
        }
    };

    return (
        <div className="app">
            <h1>Weather Dashboard</h1>
            <WeatherForm fetchWeather={fetchWeather} setUnit={setUnit} />
            {error && <p className="error">{error}</p>}
            {weather && <WeatherDisplay weather={weather} />}
        </div>
    );
}

export default App;
