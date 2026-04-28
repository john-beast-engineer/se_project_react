import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Sidebar({ onSignOut, onEditProfile }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        {currentUser.avatar ? (
          <img
            className="sidebar__avatar"
            src={currentUser.avatar}
            alt={currentUser.name}
          />
        ) : (
          <div className="sidebar__avatar-placeholder">
            {currentUser.name?.[0]?.toUpperCase()}
          </div>
        )}
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__actions">
        <button
          type="button"
          className="sidebar__edit-btn"
          onClick={onEditProfile}
        >
          Change Profile data
        </button>
      </div>
      <button
        type="button"
        className="sidebar__signout-btn"
        onClick={onSignOut}
      >
        Log Out
      </button>
    </div>
  );
}

export default Sidebar;
