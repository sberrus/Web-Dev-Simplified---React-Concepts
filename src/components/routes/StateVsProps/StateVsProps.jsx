import React from "react";

const StateVsProps = () => {
    return (
        <div className="container">
            <h1>State Vs Props</h1>
            <p>
                Veremos a fondo las diferencias entre los <code>Props</code> y los <code>State</code>
            </p>
            <h2>
                <code>Props</code>
            </h2>
            <p>
                Los props son argumentos que enviamos a las funciones componente que utilizarán estos <code>props</code> para
                su funcionamiento.
            </p>
            <h2>
                <code>State</code>
            </h2>
            <p>
                Los <code>states</code> son datos que son internos del componente que los ejecuta.
            </p>
            <h2>
                Diferencias entre <code>State</code> y <code>Props</code>
            </h2>
            <p>
                La principal diferencia es la manera en como manejamos la mutabilidad de los datos. En el caso de los{" "}
                <code>Props</code> al ser datos que son pasados de un componente padre a uno hijo. Para manipular dicha data
                tenemos que enviar ciertos modificadores para poder realizar esta operación. Un setter que se ejecuta en el
                componente hijo para modificar datos del componente padre.
            </p>
            <p>
                Debido a esto es que para manipular datos que necesitan ser manipulados por el componente propio, es
                preferible utilizar <code>states</code> debido a que estos se modifican en el componente en sí y son mucho
                más faciles de manipular dentro del componente.
            </p>
            <h2>Mejor forma de usar cada uno</h2>
            <h3>
                <code>Props</code>
            </h3>
            <p>
                En el caso de los <code>Props</code>, la mejor forma de utilizarlos es cuando queremos en un componente hijo
                mostrar información heredada del componente padre que sirva para que algunos elementos sean dinámicos.
            </p>
            <h3>States</h3>
            <p>
                En el caso de los <code>States</code> es preferible utilizarlos en componentes que tengan interacciones con
                el usuario.
            </p>
        </div>
    );
};

export default StateVsProps;
