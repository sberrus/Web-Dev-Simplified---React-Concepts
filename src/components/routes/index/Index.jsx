import React from "react";

const index = () => {
    const clases = [
        {
            name: "StatevsProps",
            desc: "Comparación a fondo del manejo de States y de los Props",
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
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">{clase.name}</h5>
                        <p class="card-text">{clase.desc}</p>
                        <a href={`/${clase.name}`} class="btn btn-primary">
                            Algo
                        </a>
                    </div>
                    <div class="card-footer text-muted">2 days ago</div>
                </div>
            ))}
        </div>
    );
};

export default index;
