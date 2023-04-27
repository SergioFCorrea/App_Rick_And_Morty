const validations = (userData) => {
  const errors = {};

  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "Ingresa un email válido";
  }
  if (!userData.email) {
    errors.email = 'Debes ingresar un email'
  }
  if(userData.email.length > 35){
    errors.email = 'El email no debe superar los 35 caracteres'
  }
  if(/.*\d +.*/.test(userData.password)){
    errors.password='la contraseña debe contener al menos un número'
  }
  if(userData.password.length < 6 || userData.password.length > 10){
    errors.password='La contraseña debe tener entre 6 y diez caracteres'
  }

  return errors;
};

export default validations;
// /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\a-zA-Z](2,1$/
