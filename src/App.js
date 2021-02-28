

import React, { useState, useEffect } from 'react';

// IMPORTACION DE COMPOMEMTES
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  
  // CHECAR SI EXISTE LA CLAVE 'citas' en el localStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  
  if(!citasIniciales) {
    citasIniciales = []; 
  }
  // ARREGLO DE CITAS
  let [citas, guardarCitas] = useState(citasIniciales);


  // use efect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    //console.log("DOCUMENTO LISTO O SE ACTUALIZO EL STATE CITAS");
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      //console.log("ENTRO AL ELSE");
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas, citasIniciales]);


  // GUARDAR CITA EN EL STATE DE CITAS
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
    //console.log("ESTE LA CITA DESDE EL COM. App ", cita);
  }

  // ELIMINAR CITA DE CITAS POR ID
  const eliminarCita = (id) => {

    const citasRestantes = citas.filter(cita => {
      return cita.id !== id;
    });
    
    guardarCitas(citasRestantes);
    //console.log("SE ELIMINARA EL: ",id);
  }

  return (
    <div className="App">
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h1>Administra citas</h1>
              {citas.length === 0
                ?
                  <h2>No hay citas por mostrar</h2>
                :
                citas.map((cita,index) =>{
                    return(
                      <Cita cita={cita} eliminarCita={eliminarCita} key={index}/>
                    );
                  }
                )
              }
            
          </div>
        </div>
      </div>

    </div>
  );
}



export default App;
