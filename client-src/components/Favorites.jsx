import { connect } from "react-redux";
import Card from "./Card";
import "./styles.css";
const Favorites = ({ myFavorites }) => {
    return (
      <div>
        {myFavorites?.map(fav => {
          return (
            <Card className='card'
              key={fav.id}
              id={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              image={fav.image}
              onClose={fav.onClose}
            />
          );
        })
        }
      </div>
    );
  };
// };

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};


export default connect(mapStateToProps, null)(Favorites);
