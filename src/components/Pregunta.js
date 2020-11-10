import React, { Fragment,useState } from 'react';
import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) =>{

    // definir state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Leer el presupuesto
    const definirPresupuesto = event =>{
        setCantidad(parseInt(event.target.value))
    }

    // Submit para definitr el presupuesto
    const agregarPresupuesto = add =>{
        add.preventDefault();

        // Validacion
        if(cantidad<1 || isNaN(cantidad)){
            setError(true)
            return;
        }

        //Si pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false)

    }

    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error? <Error mensaje="El monto ingresado es incorrecto" />: null}

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir presupuesto"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta;