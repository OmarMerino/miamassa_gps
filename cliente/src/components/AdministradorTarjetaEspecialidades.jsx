import React, { useState } from 'react'
import "./AdministradorTarjetaEspecialidades.css"
import axios from 'axios'


const AdministradorTarjetaEspecialidades = ({ nombreDocumento, ingredientesDocumento, precioDocumento, id }) => {

    const [nombred, setNombred] = useState(nombreDocumento)
    const [ingredientesd, setIngredientesd] = useState(ingredientesDocumento)
    const [preciod, setPreciod] = useState(precioDocumento)

    const borrarEspecialidad = async (id) => {
        if (window.confirm("¿Está seguro que desea borrar esta pizza?")) {
            try {
                const response = await axios.delete(`https://deploy-mia-massa-backend.vercel.app/productos/${id}`)
                console.log(response.data); // muestra el mensaje de éxito en la consola
            } catch (error) {
                console.log(error)
            }
        }
    }

    const editarProducto = async (id) => {
        if (window.confirm("¿Está seguro que desea editar esta pizza?")) {
            try {
                const { data } = await axios({
                    method: 'put',
                    url: `https://deploy-mia-massa-backend.vercel.app/edit/producto/${id}`,
                    data: {
                        nombre: nombred,
                        ingredientes: ingredientesd,
                        precio: preciod
                    }
                });
            
                console.log(data);
            } catch (err) {
                if (err.response.status === 404) {
                    console.log('Resource could not be found!');
                } else {
                    console.log(err.message);
                }
            }
        }
    }

    return (
        <div className='administradorTarjetaEspecialidades'>
            <div className="nombreDocumentoEspecialidades">
                <p>Nombre</p>
                <input type="text" value={nombred} onChange={(e) => setNombred(e.target.value)} />
            </div>
            <div className="ingredientes">
                <p>Ingredientes</p>
                <input type="text" value={ingredientesd} onChange={(e) => setIngredientesd(e.target.value)} />
            </div>
            <div className="precio">
                <p>Precio</p>
                <input type="text" value={preciod} onChange={(e) => setPreciod(e.target.value)} />
            </div>
            <div className="iconos">
                <ion-icon name="trash" onClick={() => borrarEspecialidad(id)} ></ion-icon>
                <ion-icon name="pencil" onClick={() => editarProducto(id)}></ion-icon>
            </div>
            <input type="file" style={{marginLeft:"-23px"}}/>
        </div>
    )
}

export default AdministradorTarjetaEspecialidades
