import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; //debemos importar el componente para verlo aca
//import App from './App';

const root = document.getElementById("root");
//React.createElement(componente,propiedades,hijos)
/* const elemento = React.createElement("h1", { className: "saludo" }, "Hola Mundo") */
//caso en que no usaramos jsx
//dos parametros tiene render, el elemento a colocar y luego lugar del dom para ponerlo
ReactDOM.render(<App />, root);
