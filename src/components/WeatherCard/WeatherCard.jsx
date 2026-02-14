import "./WeatherCard.css";
import { weatherOptions, defaultWeatherImage } from "../../utils/constants.js";
import React, { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.find((option) => {
    return (
      option.day === weatherData?.isDay &&
      option.condition === weatherData?.condition
    );
  });

  const weatherImageUrl = weatherOption?.url || defaultWeatherImage;
  return (
    <section
      className="weather-card"
      style={{ backgroundImage: `url(${weatherImageUrl})` }}
    >
      <p className="weather-card__temp">
        {weatherData?.temp?.[currentTemperatureUnit] || "--"}&deg;
        {currentTemperatureUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
