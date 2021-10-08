import React from "react";

const index = () => {
    const clases = [
        {
            name: "State vs Props",
            desc: "Comparación a fondo del manejo de States y de los Props",
            url: "StateVsProps",
        },
        {
            name: "State Hook",
            desc: "Manejando información del componente de manera apropiada",
            url: "StateHook",
        },
        {
            name: "Memo Hook",
            desc: "Manipulando información y optimizando información",
            url: "MemoHook",
        },
        {
            name: "Ref Hook",
            desc: "Manipulando información y optimizando información",
            url: "RefHook",
        },
        {
            name: "Context Hook",
            desc: "Enviando contexto a componentes hijos",
            url: "ContextHook",
        },
    ];
    return (
        <div className="container">
            <h1>Destripando React con Web Dev Simplified</h1>
            <p>
                En esta pequeña veremos un poco más a fondo conceptos de React para reforzar lo aprendido con Bluuweb en
                cursos pasados.
            </p>
            {clases.map((clase) => (
                <div class="card text-start">
                    <div class="card-body">
                        <h5 class="card-title">{clase.name}</h5>
                        <p class="card-text">{clase.desc}</p>
                        <a href={`/${clase.url}`} class="btn btn-dark">
                            Ver Clase
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default index;
