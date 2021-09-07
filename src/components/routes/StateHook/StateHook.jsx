import React, { useState } from "react";

const StateHook = () => {
    //*Uso Común de iniciar un state hook.
    const [
        count, //State que contiene el valor.
        setCount, //Función que modifica el state.
    ] = useState(0); //Valor inicial del state.

    //* Iniciando un State Hook mediante una función.
    const [name, setName] = useState(() => {
        //*Solo se inicializa una vez al momento de renderizar el componente y devuelve como valor el dato que devolvamos en el return.
        console.log("Esta función solo se ejecuta al inicializar el state");
        return "Samuel";
    });
    const decrementCount = () => {
        setCount(count - 1);
    };
    const decrementCountByTwo = () => {
        setCount((prevCount) => prevCount - 1);
        setCount((prevCount) => prevCount - 1);
    };
    const incrementCount = () => {
        setCount(count + 1);
    };
    const incrementCountByTwo = () => {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <div className="container">
            <h2>
                <code>State</code> Hook a Fondo
            </h2>
            <p>
                Primero, por buenas prácticas, los <code>States</code> deben inicializarse al inicio del componente que los
                va a utilizar.
            </p>
            <h3>
                Características de los <code>States</code>
            </h3>
            <ul>
                <li>
                    Los <code>States</code> no pueden estar anidados dentro de ningún otro sitio que no sea el componente en
                    sí.
                </li>
            </ul>
            <h2>Inicializando States</h2>
            <p>
                Los states pueden inicializarce de dos maneras. Por <code>inicialización directa</code> o por{" "}
                <code>callback</code>.
            </p>
            <h3>Inicialización Directa</h3>
            <p>Dentro de los parentesis, enviamos el valor que deseamos que tenga el hook como valor inicial.</p>
            <h3>Inicialización mediante callback</h3>
            <p>
                También podemos inicializar el hook enviando una función callback que solo se ejecutará una vez al momento de
                renderizar el componente que la inicialize. Siempre retornando el valor que será el que usara el hook para
                inicializarce.
            </p>

            <h2>Modificando States</h2>
            <p>
                Para modificar los states usamos la función que se pasa como segundo valor dentro del array del state. Pero
                tiene 2 formas de modificar dicho valor.
            </p>
            <h3>Modificando mediante valor</h3>
            <p>
                Modificando valores de esta menera sirve para ciertos casos, pero el problema esta cuando al momento de
                querer modificar el valor del state usando el mismo valor como referencia para la modificación, este no va a
                funcionar de manera correcta ya que el componente no modifica el state hasta que se haya ejecutado el código
                entero.
            </p>

            <h3>Modificando mediante callback</h3>
            <p>
                Para solucionar el problema mencionado anteriormente utilizamos la modificación mediante callback. Al
                modificar el state de esta menera podemos modificar el valor del state en multiples ocaciones y no va a
                generar dicho problema debido a que el valor se va a actualizar cada vez que ejecute el callback sin que
                tenga que renderizar de nuevo el componente.
            </p>
            <div id="example" className="mb-3">
                <input
                    type="text"
                    value={name}
                    placeholder="Introduce Nombre"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <h3>Name Hook: {name}</h3>
                <button onClick={decrementCountByTwo}>- -</button>
                <button onClick={decrementCount} className="mx-1">
                    -
                </button>
                <span className={count > -1 ? "fs-3 mx-1 text-success" : "fs-3 mx-1 text-danger"}> {count} </span>
                <button onClick={incrementCount} className="mx-1">
                    +
                </button>
                <button onClick={incrementCountByTwo}>+ +</button>
            </div>
        </div>
    );
};

export default StateHook;
