import React, { useState } from 'react';

export default function Weather() {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const res = await fetch(`/api/weather?latitude=${latitude}&longitude=${longitude}`);
        const data = await res.json();
        setWeather(data);
    };

    return (
        <div>
            <h1>Cek Cuaca</h1>
            <div>
                <input
                    type="text"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Masukkan latitude"
                />
                <p></p>
                <input
                    type="text"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="Masukkan longitude"
                />
                <p></p>
                <p>Contoh: -6.200000,106.816666</p>
                <button onClick={fetchWeather}>Cari</button>
            </div>

            {weather && weather.current_weather && (
                <div>
                    <h2>Data Cuaca Saat Ini</h2>
                    <p>Suhu: {weather.current_weather.temperature}°C</p>
                    <p>Kecepatan Angin: {weather.current_weather.windspeed} km/h</p>
                    <p>Arah Angin: {weather.current_weather.winddirection}°</p>
                </div>
            )}
        </div>
    );
}
