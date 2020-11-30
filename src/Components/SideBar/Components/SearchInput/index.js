import React from "react";
import SearchIcon from "../../../../assets/search.png";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <div className="sideBar-search">
      <input placeholder="Search (Ctrl+K)"></input>
      <img src={SearchIcon} alt="search" />
    </div>
  );
};

export default SearchInput;
