import React from "react";
import "./styles/style.scss";

// caso que jsx no se use
const App = () => (
    //Aqui se importa un solo elemento (el div) pero dentro de el pueden ir varios
    //<Fragment></Fragment> primeraforma
    <>
        <div>
            <h1 className="saludo">Hola Mundo</h1>
            <p>Hola, saludando desde mi componente</p>
        </div>
        <div>
            <img
                src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20Rutas%20manejo%20de%20estados%20%281%29.png"
                alt=""
            />
        </div>
    </>
);

export default App;

//Reglas JSX
//1: Toda etiqueta debe cerrarse
//2 : Los componentes deben devolver un solo elemento padre
//3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
//4: Fragment o <> hijos </>
//5 : img siempre se cierra
//6: class => className
//7: for => htmlFor
