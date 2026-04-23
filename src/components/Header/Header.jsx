import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  onLoginClick,
  onRegisterClick,
}) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
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
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="header__avatar"
              />
            ) : (
              <div className="header__avatar-placeholder">
                {currentUser.name?.[0]?.toUpperCase()}
              </div>
            )}
          </NavLink>
        </div>
      </header>
    );
  }
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

export default Header;
