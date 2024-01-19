import React from 'react';
import {Link} from 'react-router-dom';

const Add = () => {
  return (
    <div>
        <h1>Añadir nuevo turno</h1>

        <button><Link to="/turnos">Volver a turnos</Link></button>
    </div>
  )
}

export default Add