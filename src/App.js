import "./App.css";
// import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
// import characters, { Rick } from './data.js';
import Nav from "./components/Nav.jsx";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
   const charactersFilter = characters.filter(character => character.id !== Number(id))
   setCharacters(charactersFilter)
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards onClose={onClose}className="div" characters={characters} key={characters.id} />
    </div>
  );
}

export default App;
