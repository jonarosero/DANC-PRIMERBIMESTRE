import React from 'react';
import {PlayArrow, Info} from '@mui/icons-material';
import './Movies.css'

const PeliculaPrincipal = () => {
  return (
    <div className='pelicula-principal'>
        <div className="contenedor">
            <h3 className='titulo'>Interestellar (2014)</h3>
            <p className='descripcion'>
              Narra las aventuras de un grupo de exploradores que hacen uso de un
              agujero de gusano recientemente descubierto para superar las
              limitaciones de los viajes espaciales tripulados y vencer las inmensas
              distancias que tiene un viaje interestelar.
            </p>
            <button className='boton'><PlayArrow className='icon' ></PlayArrow> Reproducir</button>
            <button className='boton'><Info className='icon'></Info> Más Información</button>
        </div>
    </div>
  )
}

export default PeliculaPrincipal