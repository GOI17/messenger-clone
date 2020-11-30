import React from "react";
import UserIcon from "../../../../assets/user.jpeg";
import NewMessageIcon from "../../../../assets/new-message.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="sideBar-header">
      <img className="sideBar-header-image" src={UserIcon} alt="user" />
      <h5>Messenger Clone</h5>
      <button className="sideBar-header-new-message">
        <img src={NewMessageIcon} alt="new-message" />
      </button>
    </div>
  );
};

export default Header;
