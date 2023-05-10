import React, { useState } from 'react'
import "./AdministradorTarjetaEspecialidades.css"
import axios from 'axios'

const AdministradorTarjetaEspecialidades = ({ nombreDocumento, ingredientesDocumento, precioDocumento, id }) => {

    const [nombre, setNombre] = useState(nombreDocumento);
    const [ingredientes, setIngredientes] = useState(ingredientesDocumento);
    const [precio, setPrecio] = useState(precioDocumento);

    const borrarEspecialidad = async (id) => {
        if (window.confirm("Está seguro que desea borrar esta pizza?"))
            try {
                const response = await axios.delete(`/productos/${id}`)
                console.log(response.data); // muestra el mensaje de éxito en la consola
            } catch (error) {
                console.log(error)
            }
    }

    const editarProducto = async (id) => {
        if (window.confirm("Está seguro que desea editar esta pizza?"))
            try {
                const response = await axios.put(`/putProducto/${id}`, { nombre, ingredientes, precio })
                console.log(response.data); // muestra el mensaje de éxito en la consola
            } catch (error) {
                console.log(error)
            }
    }

    return (
        <div className='administradorTarjetaEspecialidades'>
            <div className="nombreDocumentoEspecialidades">
                <p>Nombre</p>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="ingredientes">
                <p>Ingredientes</p>
                <input type="text" value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} />
            </div>
            <div className="precio">
                <p>Precio</p>
                <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </div>
            <div className="iconos">
                <ion-icon name="trash" onClick={()=>borrarEspecialidad(id)} ></ion-icon>
                <ion-icon name="pencil" onClick={()=>editarProducto(id)}></ion-icon>
            </div>

        </div>
    )
}

export default AdministradorTarjetaEspecialidades