



import React, { useState } from 'react';

// IMPORTACION DE UTILIDADES
import uuid from 'uuid/dist/v4';

// IMPORTACION DE PROPTYPES
import PropTypes from 'prop-types';



const Formulario = ({crearCita}) => {

    // CREAR STATE DE CITAS
    const [cita, llenarDatosCita] = useState({
        'mascota': '',  
        'dueno': '',
        'fecha': '',
        'hora':'',
        'sintomas':''
    });

    let { mascota, dueno, fecha, hora, sintomas } = cita;



    // STATE DE ERROR
    let [error, actualizarError] = useState(false);

    

    // FUNCION QUE SE EJECUTA CUANDO SE ESTA ESCRIBRIENDO
    const actualizarState = (event) => {
        
        console.log(event.target.name);

        llenarDatosCita({...cita,
            [event.target.name]: event.target.value})

    }

    const enviarCita = (event) => {
        event.preventDefault();

        // VALIDAR CAMPOS DE FORMULARIO
        if(mascota.trim() === '' || dueno.trim() === '' || fecha.trim() === '' || hora.trim() === ''
        || sintomas.trim() === ''){
            actualizarError(true);
            console.log("HAY ERROR");
            return;
        }else{
            // RESETEAR EL STATE ERROR A FALSE
            actualizarError(false);

            // CREAR EL ID
            cita.id = uuid();          

            //console.log(cita);         

            // CREAR LA CITA
            crearCita(cita);
    
            // RESETEAR FORMULARIO
            
            //event.currentTarget.reset();
            llenarDatosCita({
                'mascota': '',  
                'dueno': '',
                'fecha': '',
                'hora':'',
                'sintomas':''
            })
        }

        
    }

    return(
        <div id="caja-formulario">
            <h1>Formulario</h1>

            {/*MENSAJE DE ALERTA*/}
            {error ? <p className="alerta-error">Todos los campos son obligatorios !!!</p> : null}


            <form id="formulario" name="form" onSubmit={enviarCita}>
                <label>Nombre mascota:</label>
                <input className="u-full-width" type="text" name="mascota" value={mascota} placeholder="Nombre mascota"  onChange={actualizarState} />

                <label>Nombre de dueño:</label>
                <input className="u-full-width" type="text" name="dueno" value={dueno} placeholder="Nombre dueño" onChange={actualizarState}/>

                <label>Fecha:</label>
                <input className="u-full-width" type="date" name="fecha" value={fecha} placeholder="Fecha" onChange={actualizarState}/>

                <label>Hora:</label>
                <input className="u-full-width" type="time" name="hora" value={hora} onChange={actualizarState}/>

                <label>Sintomas:</label>
                <textarea className="u-full-width" name="sintomas" value={sintomas} onChange={actualizarState}></textarea>

                <input className="u-full-width button-primary" type="submit" value="Crear cita" />

            </form>
        </div>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;