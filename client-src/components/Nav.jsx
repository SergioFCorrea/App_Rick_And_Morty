import SearchBar from "./SearchBar";
import React from "react";
import "./styles.css";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = ({ onSearch, access, setAccess }) => {
  const handleLogOut = () => {
    setAccess(false);
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div className="nav">
      <button className="button">
        <NavLink className="nav-link" to="/favorites">
          Favorites
        </NavLink>
      </button>
      <SearchBar onSearch={onSearch} />
      <div>
        <button className="button">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </button>
        <button className="button">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        </button>
        <button className="button" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Nav;
