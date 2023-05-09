import React, { forwardRef, useEffect, useState } from 'react'
import "./Agregados.css"
import axios from 'axios';

const Agregados = ({ titulo }, ref) => {
    const [mariscos, setMariscos] = useState([])
    const [carnes, setCarnes] = useState([]);
    const [verduras, setVerduras] = useState([]);

    useEffect(() => {
        axios.get('getAgregados')
            .then(response => {
                const datos = response.data
                const carnesFiltradas = datos.filter((dato) => dato.tipo === "Carnes")
                const verdurassFiltradas = datos.filter((dato) => dato.tipo === "Verduras")
                const mariscosFiltradas = datos.filter((dato) => dato.tipo === "Mariscos")
                setCarnes(carnesFiltradas)
                setVerduras(verdurassFiltradas)
                setMariscos(mariscosFiltradas)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    return (
        <div className='agregadosPantallaPrincipal'>
            <h2 ref={ref} className='tituloAgregados'>{titulo}</h2>
            <div className="contenedorAgregados">
                <div className="carnes">
                    <h4 className='tituloTipo'>Carnes</h4>
                    {carnes.map((e, index) =>
                        <div key={index} className='listadoAgregados'>
                            <p className="agregadoNombre">{e.nombre}</p>
                            <p className="agregadoPrecio">{e.precio}</p>
                        </div>
                    )}
                </div>
                <div className="verduras">
                    <h4 className='tituloTipo'>Verduras</h4>
                    <div className="verdurasContainer">
                        {verduras.map((e, index) =>
                            <div key={index} className='listadoAgregados'>
                                <p className="agregadoNombre">{e.nombre}</p>
                                <p className="agregadoPrecio">{e.precio}</p>
                            </div>
                        )}
                    </div>

                </div>
                <div className="mariscos">
                    <h4 className='tituloTipo'>Mariscos</h4>
                    {mariscos.map((e, index) =>
                        <div key={index} className='listadoAgregados'>
                            <p className="agregadoNombre">{e.nombre}</p>
                            <p className="agregadoPrecio">{e.precio}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Agregados)