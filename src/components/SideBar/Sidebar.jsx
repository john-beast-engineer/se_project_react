import React from "react";
import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={avatar} alt="avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default Sidebar;
