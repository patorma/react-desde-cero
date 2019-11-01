import React from "react";
import "./styles/style.scss";

// caso que jsx no se use
const App = () => (
    //Aqui se importa un solo elemento (el div) pero dentro de el pueden ir varios
    <div>
        <h1>Hola Mundo</h1>
        <p>Hola, saludando desde mi componente</p>
    </div>
);

export default App;

//Reglas JSX
//1: Toda etiqueta debe cerrarse
//2 : Los componentes deben devolver un solo elemento padre
