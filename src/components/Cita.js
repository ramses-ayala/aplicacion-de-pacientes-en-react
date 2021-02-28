

import React from 'react';

// IMPORTACION DE PROPTYPES
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {

    return(
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.dueno}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>

            <button className="button u-full-width" onClick={() => eliminarCita(cita.id)}>Eliminar Cita !!!</button>

        </div>
    );
}

Cita.propType = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;