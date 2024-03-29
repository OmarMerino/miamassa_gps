import React, { forwardRef,useEffect,useState } from 'react'
import "./Especialidades.css"
import TarjetaPizza from './TarjetaPizza'
import axios from 'axios'

const Especialidades = ({ titulo }, ref) => {

    const [pizza, setPizza] = useState([])
    useEffect(() => {
        axios.get('https://deploy-mia-massa-backend.vercel.app/getProductos')
            .then(response => {
                setPizza(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='especialidadesPantallaPrincipal'>
            <div className='tituloYtamaño'>
                <h2 ref={ref}>{titulo}</h2>
                <h3 >38cm</h3>
            </div>
            <div className='scrollTarjetasPizza'>
                <div className='contenedorTarjetasPizza'>
                    {pizza.map((e, index) =>
                        <TarjetaPizza key={index} nombre={e.nombre} ingredientes={e.ingredientes} precio={e.precio} img={`https://deploy-mia-massa-backend.vercel.app/${e.imagen}`} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Especialidades)