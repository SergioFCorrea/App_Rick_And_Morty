import { useState } from "react";
import validations from "./Validations/validations";
import "./styles.css";

const Form = (props) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
    setErrors(
      validations({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };


  return (
    <div className="div-form">
      <form className="form">
        <img className ='form-img'src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="" />
        <br />
        <label className='label' htmlFor="email">Email</label>
        <br />
        <input
          onChange={handleChange}
          value={userData.email}
          className="input"
          type="email"
          name="email"
        />
        {errors.email && <p>{errors.email}</p>}
        <br />
        <label className='label' htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={userData.password}
          className="input"
          type="password"
          name="password"
        />
        {errors.password && <p>{errors.password}</p>}
        <br />
        <button className='boton'onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
