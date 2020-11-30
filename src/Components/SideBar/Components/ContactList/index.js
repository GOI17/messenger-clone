import React from "react";
import UserIcon from "../../../../assets/user.jpeg";
import RoomIcon from "../../../../assets/videocall.png";
import "./ContactList.css";

const ContactList = () => {
  const contacts = [
    {
      id: 0,
      name: "John Smith",
      image: UserIcon,
    },
    {
      id: 1,
      name: "John Smith",
      image: UserIcon,
    },
    {
      id: 2,
      name: "John Smith",
      image: UserIcon,
    },
    {
      id: 3,
      name: "John Smith",
      image: UserIcon,
    },
    {
      id: 4,
      name: "John Smith",
      image: UserIcon,
    },
    {
      id: 5,
      name: "John Smith",
      image: UserIcon,
    },
  ];

  const ContactItem = ({ id, name, image }) => {
    return (
      <div className="sideBar-contactList-item">
        <button className="sideBar-contactList-item">
          <img src={image} alt={`user-${id}`} />
        </button>
        <p>{name}</p>
      </div>
    );
  };

  return (
    <div className="sideBar-contactList">
      <div className="sideBar-contactList-item">
        <button className="sideBar-contactList-new-room">
          <img src={RoomIcon} alt="room" />
        </button>
        <p>Create a room</p>
      </div>
      {contacts.map(({ id, name, image }) => (
        <ContactItem key={id} id={id} name={name} image={image} />
      ))}
    </div>
  );
};

export default ContactList;
