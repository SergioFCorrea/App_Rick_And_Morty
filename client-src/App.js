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

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const API = "28cefe61aa85.067ebf32b9afff16e6cc";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "serfabian619@gmail.com";
  const PASSWORD = "c";
  const URL = "http://localhost:3001/rickandmorty/login/";

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      ).then(({ data }) => {
        const { access } = data;

        setAccess(data);
        access && navigate("/home");
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("No se encintro personaje");
    }

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
  };
}
export default App;
