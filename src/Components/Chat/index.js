import React from "react";
import Header from "./Components/Header";
import Message from "./Components/Message";
import MessageInput from "./Components/MessageInput";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <Header />
      <Message />
      <MessageInput />
    </div>
  );
};

export default Chat;
