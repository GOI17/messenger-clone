import React from "react";
import SideBar from "../SideBar";
import Chat from "../Chat";
import "./Messenger.css";

const Messenger = () => {
  return (
    <div className="messenger">
      <SideBar />
      <Chat />
    </div>
  );
};

export default Messenger;
