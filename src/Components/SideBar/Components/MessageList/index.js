import React from "react";
import UserIcon from "../../../../assets/user.jpeg";
import CheckIcon from "../../../../assets/check.png";
import "./MessageList.css";

const MessageList = () => {
  const messages = [
    {
      id: 0,
      fromName: "John Smith",
      contactImage: UserIcon,
      lastMessage: {
        text: "Hello there!",
        time: "9:20pm",
      },
      seen: true,
      read: true,
    },
    {
      id: 1,
      fromName: "John Smith",
      contactImage: UserIcon,
      lastMessage: {
        text: "Hello there!",
        time: "9:20pm",
      },
      seen: false,
      read: true,
    },
    {
      id: 2,
      name: "John Smith",
      fromName: "John Smith",
      contactImage: UserIcon,
      lastMessage: {
        text: "Hello there!",
        time: "9:20pm",
      },
      seen: false,
      read: true,
    },
    {
      id: 3,
      fromName: "John Smith",
      contactImage: UserIcon,
      lastMessage: {
        text: "Hello there!",
        time: "9:20pm",
      },
      seen: false,
      read: false,
    },
    {
      id: 4,
      fromName: "John Smith",
      contactImage: UserIcon,
      lastMessage: {
        text: "Hello there!",
        time: "9:20pm",
      },
      seen: true,
      read: true,
    },
    {
      id: 5,
      fromName: "John Smith",
      contactImage: UserIcon,
      lastMessage: {
        text: "Hello there!",
        time: "9:20pm",
      },
      seen: true,
      read: false,
    },
  ];

  const MessageItem = ({
    id,
    fromName,
    contactImage,
    lastMessage,
    seen,
    read,
  }) => {
    return (
      <div className="sideBar-messageList-item">
        <img id="user-image" src={contactImage} alt={`user-${id}`} />
        <div className="sideBar-messageList-item-content">
          <p>{fromName}</p>
          <p>
            {lastMessage?.text} {lastMessage?.time}
          </p>
        </div>
        {seen && !read && <div id="read-user"></div>}
        {seen && read && (
          <img id="seen-user-image" src={contactImage} alt="seen" />
        )}
        {!seen && !read && <div id="read-user"></div>}
        {!seen && read && (
          <img id="seen-user-image" src={CheckIcon} alt="seen" />
        )}
      </div>
    );
  };

  return (
    <div className="sideBar-messageList">
      {messages.map(
        ({ id, fromName, contactImage, lastMessage, seen, read }) => (
          <MessageItem
            key={id}
            id={id}
            fromName={fromName}
            contactImage={contactImage}
            lastMessage={lastMessage}
            seen={seen}
            read={read}
          />
        )
      )}
    </div>
  );
};

export default MessageList;
