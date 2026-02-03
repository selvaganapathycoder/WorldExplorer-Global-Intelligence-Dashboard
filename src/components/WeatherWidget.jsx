import React, { useState, useEffect } from "react";
import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";

const WeatherWidget = ({ capital, countryCode }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!capital || !API_KEY || API_KEY === "YOUR_OPENWEATHER_API_KEY_HERE")
      return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${capital},${countryCode}&units=metric&appid=${API_KEY}`,
        );
        if (!response.ok) throw new Error("Weather data unavailable");
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [capital, countryCode, API_KEY]);

  if (!API_KEY || API_KEY === "YOUR_OPENWEATHER_API_KEY_HERE") {
    return (
      <div className="glass p-6 rounded-3xl border border-white/5 text-center">
        <p className="text-slate-400 text-sm">
          Add OpenWeather API Key to .env to see live weather
        </p>
      </div>
    );
  }

  if (loading)
    return <div className="glass p-6 rounded-3xl animate-pulse h-32" />;
  if (error || !weather) return null;

  return (
    <div className="glass p-6 rounded-3xl border border-white/10 shadow-premium relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Cloud size={80} />
      </div>

      <div className="relative z-10">
        <h3 className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
          <Thermometer size={14} className="text-blue-400" />
          Current Weather: {capital}
        </h3>

        <div className="flex items-end gap-4 mb-6">
          <span className="text-5xl font-black text-white tracking-tighter">
            {Math.round(weather.main.temp)}°C
          </span>
          <span className="text-blue-400 font-bold pb-1 capitalize">
            {weather.weather[0].description}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Droplets size={16} className="text-blue-400" />
            <span className="text-sm font-medium">
              {weather.main.humidity}% Humidity
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Wind size={16} className="text-blue-400" />
            <span className="text-sm font-medium">
              {weather.wind.speed} m/s Wind
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
