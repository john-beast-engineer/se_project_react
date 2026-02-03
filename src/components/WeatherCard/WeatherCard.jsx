import "./WeatherCard.css";
import { weatherOptions, defaultWeatherImage } from "../../utils/constants.js";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.find((option) => {
    return (
      option.day === weatherData?.isDay &&
      option.condition === weatherData?.condition
    );
  });

  const weatherImageUrl = weatherOption?.url || defaultWeatherImage;
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData?.temp?.F || "--"}°F</p>

      <img
        src={weatherImageUrl}
        alt={weatherData?.condition || "weather"}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
