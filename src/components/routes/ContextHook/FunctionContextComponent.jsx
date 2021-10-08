import React, { useContext } from "react";
//importando el contexto
import { ThemeContext } from "./ContextHook";
const FunctionContextComponent = () => {
    //Almacenamos en una constante lo que nos envia el contexto para usarlo en este componente.
    const darkTheme = useContext(ThemeContext); //Hacemos uso del hook pasandole como argumento el contexto con el que deseamos trabajar.
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem",
    };

    return <div style={themeStyles}>Function Component</div>;
};

export default FunctionContextComponent;
