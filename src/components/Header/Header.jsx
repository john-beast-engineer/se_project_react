import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img src={logo} alt="WTWR logo" className="header__logo" />
      </NavLink>
      <p className="header__date-location">
        {currentDate}, {weatherData?.city || "Loading..."}
      </p>

      <ToggleSwitch />
      <button
        type="button"
        className="header__add-btn"
        onClick={handleAddClick}
      >
        + Add clothes
      </button>
      <div className="header__user">
        <NavLink to="/profile" className="header__profile-link">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
