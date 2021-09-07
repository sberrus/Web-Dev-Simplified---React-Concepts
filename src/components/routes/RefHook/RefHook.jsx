import React from "react";
import Example1 from "./Example1";

const RefHook = () => {
    return (
        <div className="container">
            <h1>Ref Hook</h1>
            <p>
                <code>UseRef</code> es un hook que tiene un comportamiento similar a <code>useState</code>, con la diferencia
                de que este, al momento de cambiar de valor, no vuelve a renderizar el componente. Además, mantiene los datos
                consistentes entre renderizados.
            </p>
            <p>
                Como bien sabemos, cuando trabajamos con <code>useEffect</code> y dentro de este tenemos un{" "}
                <code>state</code>, debemos pasar el array con las dependencias, ya sea vacío, debido a que de no hacerlo se
                crea un loop infinito que nos bloquea la app.
            </p>
            <p>
                Con <code>useRef</code> podemos crear un objeto que con su propiedad <code>.current</code> nos permite
                trabajar con <code>useEffect</code> sin que se cree dicho bucle.
            </p>
            <Example1 />
            <h2>Usando ref como atributo para selectores</h2>
            <p>
                Otra de las curiosidades de <code>useRef</code> es que este nos sirve también para hacer referencia a un
                elemento del DOM. Que nos permita utilizarlo como selector.
            </p>
            <h2>Usando useRef para tener un historial de estados del componente</h2>
            <p>
                Una de las caracteristicas más útiles que nos ofrece <code>useRef</code>, es que podemos usarlo para no solo
                para almacenar valores consistentes entre renderizados, también nos permite crear un state que tenga un
                historial con todos los cambios que se hayan realizado en este state.
            </p>
            <h2>Consideraciones</h2>
            <p>
                <code>useRef</code> permite realizar las funciones que se han explicado anteriormente. Pero hay que tener
                cuidado. Si bien es cierto que podemos usarlo como almacen de información, esto no es lo indicado debido a
                que al cambiar contenido o usando <code>useRef</code> para este fin no hace que el estado del componente
                cambie. Para almacenar información esta el <code>useState</code> que es especifico para este fin.
            </p>
            <p>
                También hemos visto que puede usarse para hacer referencia a un DOMElement. Pero no debe usarse para
                introducir elementos nuevos dentro del DOM debido a que para esto se debe encargar JSX para evitar tener un
                código innecesariamente complejo.
            </p>
        </div>
    );
};

export default RefHook;
