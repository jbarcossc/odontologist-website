import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Turnos = () => {
    const [turnos, setTurnos] = useState([])

    useEffect(() => {
        const fetchAllTurnos = async () => {
            try {
                const res = await axios.get("http://localhost:8800/turnos");
                setTurnos(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchAllTurnos();
    }, []);

    return (
        <div>
            <h1>Turnos</h1>
            <div className="turnos">
                {turnos.map(turno => (
                    <div className="turno">
                        <h2 className="nombre">{turno.nombre}</h2>
                        <p className="apellido">{turno.apellido}</p>
                        <p className="fecha">{turno.fecha}</p>
                        <p className="hora">{turno.hora}</p>
                        <p className="email">{turno.email}</p>
                        <p className="tel">{turno.tel}</p>
                        <p className="dni">{turno.dni}</p>
                        <p className="duracion">{turno.duracion}</p>
                        <p className="descripcion">{turno.descripcion}</p>
                        <br />
                    </div>
                ))}
            </div>
            <button><Link to="/nuevo-turno">Añadir un nuevo turno</Link></button>
        </div>
    )
}

export default Turnos