import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Favorites from "./components/Favorites";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Routes,
  Route,
  useLocation,
  useRoutes,
  useNavigate,
} from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API = "28cefe61aa85.067ebf32b9afff16e6cc";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "serfabian619@gmail.com";
  const PASSWORD = "c";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFilter);
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav
          onSearch={onSearch}
          currentPath={location.pathname}
          access={access}
          setAccess={setAccess}
        />
      ) : null}
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={
            <Cards
              onClose={onClose}
              className="div"
              characters={characters}
              key={characters.id}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
