import React, { useState } from 'react';

function WeatherForm({ fetchWeather, setUnit }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(city);
        setCity('');
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
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
            <select onChange={handleUnitChange} className="unit-select">
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
            </select>
        </form>
    );
}

export default WeatherForm;
