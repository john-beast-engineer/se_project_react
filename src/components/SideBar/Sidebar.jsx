import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Sidebar({ onSignOut, onEditProfile }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt={currentUser.name}
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__actions">
        <button
          type="button"
          className="sidebar__edit-btn"
          onClick={onEditProfile}
        >
          Edit Profile
        </button>
      </div>
      <button
        type="button"
        className="sidebar__signout-btn"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;
