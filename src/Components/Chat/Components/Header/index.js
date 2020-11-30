import React from "react";
import UserIcon from "../../../../assets/user.jpeg";
import CallIcon from "../../../../assets/call.png";
import VideoCallIcon from "../../../../assets/videocall.png";
import SearchIcon from "../../../../assets/search.png";
import MoreIcon from "../../../../assets/more.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="chat-header">
      <img className="chat-header-image" src={UserIcon} alt="user" />
      <h5>John Smith</h5>
      <button className="chat-header-new-message">
        <img src={CallIcon} alt="call" />
      </button>
      <button className="chat-header-new-message">
        <img src={VideoCallIcon} alt="videocall" />
      </button>
      <button className="chat-header-new-message">
        <img src={SearchIcon} alt="search" />
      </button>
      <button className="chat-header-new-message">
        <img src={MoreIcon} alt="more" />
      </button>
    </div>
  );
};

export default Header;
