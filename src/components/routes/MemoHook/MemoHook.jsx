import React from "react";
import SlowComponent from "./SlowComponent";
import FastComponent from "./FastComponent";

const MemoHook = () => {
    return (
        <div className="container">
            <h1>Usando Memo Hook</h1>
            <p>
                El <code>Memo Hook</code> es un hook que nos permite utilizar la memoización siendo esta característica muy
                útil para optimizar los tiempos de cargar de nuestra app para evitar llamadas inecesarias para obtener
                información.
            </p>
            <h2>Ejemplo de uso</h2>
            <p>
                En los siguientes ejemplos usaremos dos componentes que simularán la carga de una función que relentiza la
                renderización del mismo, pero con la difernecia de que uno no usara <code>Memo</code> y la otra si.
            </p>
            <p>
                En el siguiente componente podemos observar que la función hace que cada vez que querramos modificar
                cualquier elemento en nuestro componente, este al renderizarse, dure mucho en volver a renderizarse.
            </p>
            <SlowComponent />
            <p>
                En el siguiente ejemplo podremos observar como se optimiza la carga del componente con el <code>Memo</code>,
                siendo de fondo lo mismo pero almacenando la información y evitando que se vuelva a ejecutar de manera
                innecesaria la función lenta al momento de cambiar el tema.
            </p>
            <FastComponent />
            <h2>Consideraciones</h2>
            <p>
                Este Hook no debe utilizarse a la ligera debido a que como debemos usar ciertos recursos para almacenar los
                valores de lo qeu devuelven las funciones memoizadas, esto puede hacer que a la larga la optimización o los
                recursos que consuma la aplicación sean elevados. Por lo tanto se recomienda utilizar la memoización solo
                cuando esta perjudique la optimización de manera directa como en este ejemplo. Si no hace falta es mejor no
                utilizar la memoización.
            </p>
        </div>
    );
};

export default MemoHook;
