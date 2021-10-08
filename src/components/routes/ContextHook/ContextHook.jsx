import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
//importamos contexto desde el componente
import FunctionContextComponent2 from "./ComponenteContexto/FunctionContextComponent2";
import { ThemeProvider } from "./ComponenteContexto/ThemeContext";

//Declaración de un nuevo contexto.
export const ThemeContext = React.createContext();

const ContextHook = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    };

    return (
        <div className="container">
            <h1>Context Hook</h1>
            <p>
                <code>useContext</code> es un hook que nos permite crear un contexto el cual nos permite enviar datos desde
                un componente padre, a un componente hijo si este lo necesita. Es una forma más optimizada de enviar
                información entre componentes.
            </p>
            <p>
                Para simplificarlo más podriamos decir que lso context son objetos globales de un componente padre que pueden
                heredar cualesquiera de sus hijos, siempre y cuando esten dentro del contexto.
            </p>
            <p>
                Los Context pueden ser usados tanto en componentes de <code>clase</code> como los componentes{" "}
                <code>de función</code>.
            </p>
            <p>
                Aunque se pueden usar en ambos casos, es mucho más sencillo trabajar con los contextos dentro de los
                componentes <code>de función</code>
            </p>
            <p>Veremos ambos ejemplos para poder observar el comportamiento en cada uno de los casos.</p>
            {/*El provider anida a los componentes que van a recibir el objeto para que puedan trabajar con lo que contenga este. Se envia en el atributo "value" el objeto o el valor que querramos usar en el contexto.*/}
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                {/*Todos los componentes dentro del provider podrán acceder a lo que contenga el "value" en este caso lo que contenga la variable "darkTheme". El contenido podra ser accedido por cualesquiera de los componentes hijos de este componente.*/}
                <FunctionContextComponent />
                <ClassContextComponent />
            </ThemeContext.Provider>
            <h2>Usando componente exclusivo para manejar el contexto</h2>
            <p>
                Para tener todo el código más ordenado también podemos usar un componente que se encargue solo de manejar la
                lógica del contexto, esto para simplificar el código que vayamos a utilizar.
            </p>
            {/*Como podemos observar podemos manejar de manera sencilla los contextos y así simplificamos mucho el código*/}
            <ThemeProvider>
                <FunctionContextComponent2 />
            </ThemeProvider>
        </div>
    );
};

export default ContextHook;
