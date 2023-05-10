import React, { forwardRef,useEffect,useState } from 'react'
import "./Especialidades.css"
import TarjetaPizza from './TarjetaPizza'
import axios from 'axios'

const Especialidades = ({ titulo }, ref) => {

/*      const pizza = [
        {
            nombre: "Mia Massa",
            ingredientes: "Salsa Pesto albahaca, Queso, Pollo o Carne, Variedad de pimientos, Choclo, Cebollín, Cilantro, Aceitunas y Orégano",
            precio: "$15.000",
            img: miamassa
        },
        {
            nombre: "Serrano Gourmet",
            ingredientes: "Salsa de tomate, Queso, Queso azúl, Pimentón asado, Cebolla caramelizada, Salama, Jamón, Carne, Aceitunas y Orégano",
            precio: "$15.000",
            img: serranogourmet
        },
        {
            nombre: "Full Tocino",
            ingredientes: "Salsa de tomate, Queso, Tocino, Pepinillos, Cebolla crispy, Salsa BBQ y Orégano",
            precio: "$17.000",
            img: fulltocino
        },
        {
            nombre: "Mia Massa",
            ingredientes: "Salsa Pesto albahaca, Queso, Pollo o Carne, Variedad de pimientos, Choclo, Cebollín, Cilantro, Aceitunas y Orégano",
            precio: "$15.000",
            img: miamassa
        },
        {
            nombre: "Serrano Gourmet",
            ingredientes: "Salsa de tomate, Queso, Queso azúl, Pimentón asado, Cebolla caramelizada, Salama, Jamón, Carne, Aceitunas y Orégano",
            precio: "$15.000",
            img: serranogourmet
        },
        {
            nombre: "Full Tocino",
            ingredientes: "Salsa de tomate, Queso, Tocino, Pepinillos, Cebolla crispy, Salsa BBQ y Orégano",
            precio: "$17.000",
            img: fulltocino
        }
    ]  */

    const [pizza, setPizza] = useState([])
    useEffect(() => {
        axios.get('/getProductos')
            .then(response => {
                setPizza(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    console.log(pizza) 


    return (
        <div className='especialidadesPantallaPrincipal'>
            <div className='tituloYtamaño'>
                <h2 ref={ref}>{titulo}</h2>
                <h3 >38cm</h3>
            </div>
            .
            <div className='scrollTarjetasPizza'>
                <div className='contenedorTarjetasPizza'>
                    {pizza.map((e, index) =>
                        <TarjetaPizza key={index} nombre={e.nombre} ingredientes={e.ingredientes} precio={e.precio} img={`/${e.imagen}`} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Especialidades)