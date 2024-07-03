import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

function App() {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
        const data = await response.json();
        setWeather(data);
    };

    return (
        <div className="app">
            <h1>Weather Dashboard</h1>
            <WeatherForm fetchWeather={fetchWeather} />
            {weather && <WeatherDisplay weather={weather} />}
        </div>
    );
}

export default App;
