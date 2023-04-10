import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./styles.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
      <div className="div-detail">
        <h1 className="texto-detail">
          Este es el diteil del personaje {character.id}
          <ul>
            <li>{character?.name}</li>
            <li>{character?.status}</li>
            <li>{character?.species}</li>
            <li>{character?.gender}</li>
            <li>{origin?.name}</li>
          </ul>
        </h1>
        <img className="detail-img" src={character?.image} alt={character?.name} />
      </div>
  );
};

export default Detail;
