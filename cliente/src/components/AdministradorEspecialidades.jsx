import React ,{useState}from 'react'
import "./AdministradorEspecialidades.css"
import axios from 'axios'

const AdministradorEspecialidades = ({ nombreDocumento, ingredientes, precio, id }) => {
    const [nombre, setNombre] = useState(nombreDocumento)

    const borrarEspecialidad = async (id) => {
        if (window.confirm("Está seguro que desea borrar esta pizza?"))
            try {
                const response = await axios.delete(`/productos/${id}`)
                console.log(response.data); // muestra el mensaje de éxito en la consola
            } catch (error) {
                console.log(error)
            }
    }

    
    return (
        <div className='administradorEspecialidades'>
            <div className="documentoEspecialidades">
                <p>Nombre</p>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <p>{ingredientes}</p>
            <p>{precio}</p>
            <ion-icon name="trash" onClick={() => borrarEspecialidad(id)} ></ion-icon>
            <ion-icon name="pencil"></ion-icon>
        </div>
    )
}

export default AdministradorEspecialidades