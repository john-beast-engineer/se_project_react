import "./Header.css";
import logo from "../../assets/logo.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="WTWR logo" className="header__logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData?.city || "Loading..."}
      </p>
      <button
        type="button"
        className="header__add-btn"
        onClick={handleAddClick}
      >
        + Add clothes
      </button>
      <div className="header__user">
        <p className="header__username">Terrence Tegegne</p>
        <img
          src="https://via.placeholder.com/40"
          alt="User avatar"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
