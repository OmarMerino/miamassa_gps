import React, { useState } from 'react'
import "./AdministradorTarjetaAgregados.css"
import axios from 'axios';

const AdministradorTarjetaAgregados = ({ nombreAgregado, tipoAgregado, precioAgregado, id }) => {
    const [nombre, setNombre] = useState(nombreAgregado);
    const [tipo, setTipo] = useState(tipoAgregado);
    const [precio, setPrecio] = useState(precioAgregado);

    const borrarAgregado = async (id) => {
        if (window.confirm("Está seguro que desea borrar este agregado?"))
            try {
                const response = await axios.delete(`/agregados/${id}`)
                console.log(response.data); // muestra el mensaje de éxito en la consola
            } catch (error) {
                console.log(error)
            }
    }

    const editarAgregado = (id) => {

    }
    return (
        <div className='administradorTarjetaAgregados'>
            <div className="nombreDocumento">
                <p>Nombre</p>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="tipo">
                <p>Tipo</p>
                <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
            </div>
            <div className="precio">
                <p>Precio</p>
                <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </div>
            <div className="iconos">
                <ion-icon name="trash" onClick={() => borrarAgregado(id)} ></ion-icon>
                <ion-icon name="pencil" onClick={() => editarAgregado(id)}></ion-icon>
            </div>

        </div>
    )
}

export default AdministradorTarjetaAgregados