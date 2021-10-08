import React from "react";
//importando el contexto
import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionContextComponent2 = () => {
    //Almacenamos en una constante lo que nos envia el contexto para usarlo en este componente.
    const darkTheme = useTheme(); //Hacemos uso del hook pasandole como argumento el contexto con el que deseamos trabajar.
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem",
    };

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>Function Component</div>;
        </>
    );
};

export default FunctionContextComponent2;
