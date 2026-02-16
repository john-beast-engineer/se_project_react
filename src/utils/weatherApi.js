import { apiKey, coordinates } from "./constants";
import { handleServerResponse } from "./api";

const getWeatherType = (temperature) => {
  if (temperature >= 86) return "hot";
  if (temperature >= 66) return "warm";
  return "cold";
};

export const getWeather = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${apiKey}`;

  return fetch(url).then(handleServerResponse);
};

export const filterWeatherData = (data) => {
  const result = {
    city: data.name,
    temp: {
      F: Math.round(data.main.temp),
      C: Math.round((data.main.temp - 32) * (5 / 9)),
    },
    type: getWeatherType(data.main.temp),
    condition: data.weather[0].main.toLowerCase(),
    isDay: isDay(data.sys, Date.now()),
  };
  return result;
};

const isDay = (sys, now) => {
  return now > sys.sunrise * 1000 && now < sys.sunset * 1000;
};
