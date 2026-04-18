import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  onLoginClick,
  onRegisterClick,
  currentUser,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  if (isLoggedIn) {
    return (
      <header className="header">
        <div className="header__left">
          <NavLink to="/" className="header__logo-link">
            <img src={logo} alt="WTWR logo" className="header__logo" />
          </NavLink>
          <p className="header__date-location">
            {currentDate}, {weatherData?.city || "Loading..."}
          </p>
        </div>
        <div className="header__right">
          <ToggleSwitch />
          <button
            type="button"
            className="header__add-btn"
            onClick={handleAddClick}
          >
            + Add clothes
          </button>
          <NavLink to="/profile" className="header__profile-link">
            <p className="header__username">{currentUser.name}</p>
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="header__avatar"
            />
          </NavLink>
        </div>
      </header>
    );
  }
  if (!isLoggedIn) {
    return (
      <header className="header">
        <div className="header__left">
          <NavLink to="/" className="header__logo-link">
            <img src={logo} alt="WTWR logo" className="header__logo" />
          </NavLink>
          <p className="header__date-location">
            {currentDate}, {weatherData?.city || "Loading..."}
          </p>
        </div>
        <div className="header__center">
          <ToggleSwitch />
        </div>
        <div className="header__right">
          <button
            type="button"
            className="header__add-btn"
            onClick={onLoginClick}
          >
            Log In
          </button>
          <button
            type="button"
            className="header__add-btn"
            onClick={onRegisterClick}
          >
            Sign Up
          </button>
        </div>
      </header>
    );
  }
}
export default Header;
