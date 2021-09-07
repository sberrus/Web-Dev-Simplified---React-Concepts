import React, { useState, useMemo } from "react";

const FastComponent = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(
        () => {
            //Usamos el hook para que memoize la función y la cachee para que no vuelva a ejecutar dicha función a menos que le input cambie.
            return slowFunction(number);
        },
        //Lista de dependencias las cuales escucharán si el valor cambia y de hacerlo, permitira vovler a ejecutar la función memoizada.
        [number]
    );
    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };
    return (
        <div className="d-flex flex-column col-8 m-auto">
            <h3 className="text-success">Componente Con useMemo</h3>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} className="d-block" />
            <button
                onClick={() => {
                    setDark((prevDark) => !prevDark);
                }}
            >
                Cambiar Tema
            </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    );
};
function slowFunction(num) {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
}
export default FastComponent;
