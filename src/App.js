import React from "react";
import "./styles/style.scss";

// caso que jsx no se use
const App = () => (
    //Aqui se importa un solo elemento (el div) pero dentro de el pueden ir varios
    //<Fragment></Fragment> primeraforma
    <>
        <div>
            <h1>Hola Mundo</h1>
            <p>Hola, saludando desde mi componente</p>
        </div>
        <div>
            <h2>Hola Mundo soy un h2</h2>
            <p>Hola, saludando desde mi componente, yo soy un h2</p>
        </div>
    </>
);

export default App;

//Reglas JSX
//1: Toda etiqueta debe cerrarse
//2 : Los componentes deben devolver un solo elemento padre
//3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
