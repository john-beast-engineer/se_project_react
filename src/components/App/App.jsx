import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { defaultClothingItems } from "../../utils/constants";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.itemName.value;
    const link = form.link.value;
    const weather = form.weather.value;

    const newItem = {
      _id: Date.now(),
      name,
      link,
      weather,
    };
    setClothingItems([newItem, ...clothingItems]);
    closeActiveModal();
    form.reset();
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather()
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main
          handleCardClick={handleCardClick}
          weatherData={weatherData}
          clothingItems={clothingItems}
        />

        <Footer />

        <ModalWithForm
          title="New garment"
          buttonText="Add garment"
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          name="add-garment"
          onSubmit={handleAddItemSubmit}
        >
          <label className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              placeholder="Name"
              name="itemName"
              required
            />
          </label>
          <label className="modal__label">
            Image
            <input
              type="url"
              className="modal__input"
              placeholder="Image URL"
              name="link"
              required
            />
          </label>
          <fieldset className="modal__fieldset">
            <legend className="modal__legend">Select the weather type:</legend>
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather"
                value="hot"
                className="modal__radio"
                required
              />
              Hot
            </label>
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather"
                value="warm"
                className="modal__radio"
              />
              Warm
            </label>
            <label className="modal__radio-label">
              <input
                type="radio"
                name="weather"
                value="cold"
                className="modal__radio"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>

        <ItemModal
          isOpen={activeModal === "preview"}
          onClose={closeActiveModal}
          card={selectedCard}
        />
      </div>
    </div>
  );
}
export default App;
