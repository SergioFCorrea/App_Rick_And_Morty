import { Link } from "react-router-dom";
import "./styles.css";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  myFavorites,
  addFav,
  removeFav,
}) {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (id) => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className="card">
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      <button className="cardButton" onClick={() => onClose(id)}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img className="imagen" src={image} alt="" />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
