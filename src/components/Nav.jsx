import SearchBar from "./SearchBar";
import React from "react";
import './styles.css'

const Nav = ({ onSearch }) => {
  return (
    <div className="nav">
      <SearchBar onSearch={ onSearch }/>
    </div>
  );
};

export default Nav;
