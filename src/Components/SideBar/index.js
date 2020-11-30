import React from "react";
import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";
import ContactList from "./Components/ContactList";
import MessageList from "./Components/MessageList";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <Header />
      <SearchInput />
      <ContactList />
      <MessageList />
    </div>
  );
};

export default SideBar;
