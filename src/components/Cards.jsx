import Card from "./Card";
import './styles.css'

export default function Cards({characters, onClose}) {
  
  return (
  <div className="cards">
      {characters.map(({id, name, status, species, gender, origin, image})=> {
         return (
          < Card
          key = {id}
          id={id}
          name = {name}
          species={species}
          gender={gender}
          status={status}
          origin={origin.name}          
          image={image}
          onClose={onClose}
          />
         )
      })
      }
  </div>
  )
}
