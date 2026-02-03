import "./Main.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";

function Main({ handleCardClick, weatherData, clothingItems }) {
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData?.temp?.F || "--"}°F / You may want to wear:
        </p>

        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return weatherData?.type
                ? item.weather === weatherData.type
                : true;
            })
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
