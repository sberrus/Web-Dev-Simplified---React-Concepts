import React, { useState } from "react";

const SlowComponent = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = slowFunction(number);
    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };
    return (
        <div className="d-flex flex-column col-8 m-auto">
            <h3 className="text-danger">Componente Sin useMemo</h3>
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
export default SlowComponent;
