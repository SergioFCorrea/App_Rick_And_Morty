// import {Link} from 'react-router-dom'
import "./styles.css";
import imagen from './imagen.JPG'

const About = () => {
  return (
    <div className="about">
      <img
        className="image"
        src={imagen}
        alt=""
      />

      <h2 className="about-text">Sergio Correa</h2>
      <h3 className="about-text">
        Mi nombre es Sergio Correa, soy estudiante de programación full-stack en
        Henry, por el momento tengo conocimientos de Java Script, HTML y me
        ecnuentro aprendiendo React.
      </h3>
    </div>
  );
};

export default About;
