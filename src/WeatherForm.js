import React, { useState } from 'react';

function WeatherForm({ fetchWeather }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(city);
        setCity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button type="submit">Get Weather</button>
        </form>
    );
}

export default WeatherForm;
