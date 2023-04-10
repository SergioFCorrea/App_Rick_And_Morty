import SearchBar from "./SearchBar";
import React from "react";
import './styles.css'
import { NavLink } from "react-router-dom";


const Nav = ({ onSearch }) => {
  return (
    <div className="nav">
      <SearchBar onSearch={ onSearch }/>
      <div>
      <button className="button">
        <NavLink className='nav-link' to='/about'>About</NavLink>
      </button>
      <button className="button">
      <NavLink className='nav-link' to='/home'>Home</NavLink>
      </button>
      </div>
    </div>
  );
};

export default Nav;
