import React from 'react';

//función validate...está función validará que los campos de nuestros inputs sean completados con
//los valores que esperamos a travez de regex (la primer mitad de la función nos la dan hecha)
//esta función se escribe por fuera del componente y se exporta por que es importada en el archivo de test.
export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  //en la segunda mitad de esta funció chequeamos dos cosas: si el campo de password está vacío
  //se le dirá al usuario que la contraseña es requerida.
  if (!input.password) {
    errors.password = 'Password is required';
  //por otra parte, cuando el user comience a escribir la contraseña se le pedirá que al menos
  //contenga un número.
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }


  return errors;
};
export default function  Form() {
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  
  //nuestra función handleInputChange será pasada a nuestros inputs en el evento onChange y será ejecutada
  //cada vez que el usuario tipee...lo que hace está función es ir actualizando nuestros estados input y error
  //en input guardará los valores que el usuario tipee y en error guardará el resultado de la ejecución
  //de la función validate que recibirá nuestro estado input como argumento.
  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  
  return (
    <form>
      <div>
        <label>Username:</label>
        {/* en nuestro input username decimos que su className sera "danger" siempre y cuando
            exista un error en nuestro estado errors.username, para eso usamos el operador
            && si tenés dudas al respecto te invito a repasar la tabla de la verdad de el
            operador and y quedará mucho mas claro.
            Por otra parte, especificamos que su valor sera el valor de input.username y decimos que
            en el evento onchange ejecute la función handleInputChange*/}
        <input className={errors.username && 'danger'} type="text" name="username" value={input.username}
         onChange={(e) => handleInputChange(e)} />
         {/* por último, utilizando nuevamente el operador && decimos que si existe un error
         nos muestre un pequeño parrafó con el contenido del error */}
         {errors.username && (
      <p className="danger">{errors.username}</p>
    )}
        <label>Password:</label>
       {/* repetimos el proceso para password */}
        <input className={errors.password && 'danger'} type="password" name="password" value={input.password}
         onChange={(e) => handleInputChange(e)}/>
          {errors.password && (
      <p className="danger">{errors.password}</p>
    )}
      </div>
      {/* por último agregamos un input type submit que nos servirá para submitear el form y listo
      homework terminada! */}
      <input type="submit" />
    </form>
  )
}
