import React, { useState, useEffect, useRef } from "react";

const Example1 = () => {
    const [name, setName] = useState("");
    const renderedCount = useRef(1); //*Usando useRef para almacenar información
    const inputRef = useRef(); //*Usando useRef como selector

    //*MANTENIENDO CONSISTENCIA ENTRE RENDERIZADOS CON useRef
    useEffect(() => {
        renderedCount.current = renderedCount.current + 1;
    });

    //*USANDO useRef PARA HACER REFERENCIA A UN DOMELEMENT
    const focus = () => {
        console.log(inputRef.current); //*Accediendo al DOMElement mediante useRef
        inputRef.current.focus();
    };
    return (
        <div className="col-8 m-auto d-flex flex-column justify-content-center">
            <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>Mi nombre es {name}</div>
            <div>Veces renderizado componente: {renderedCount.current}</div>
            <button onClick={focus}>Focus</button>
        </div>
    );
};

export default Example1;
