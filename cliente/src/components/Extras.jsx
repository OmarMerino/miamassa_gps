import React, { forwardRef } from 'react'
import "./Extras.css"
import ExtrasTarjeta from './ExtrasTarjeta'
import palitosdeajo from "../image/palitosdeajo.jpg"
import bebidas from "../image/bebidas.jpg"
import pizzachica from "../image/pizzachica.jpg"
import pizzamediana from "../image/pizzamediana.jpg"
import pizzagrande from "../image/pizzagrande.jpg"
import salsas from "../image/salsas.jpg"

const Extras = ({ titulo }, ref) => {
  const extras = [{
    nombre: "Palitos de ajo",
    precio: "$4.990",
    img: palitosdeajo
  },
  {
    nombre: "Bebidas 2,5Lts",
    precio: "$2.500",
    img: bebidas
  },
  {
    nombre: "Salsas: BBQ, Ajo y Queso",
    precio: "$1.500",
    img: salsas
  },
  {
    nombre: "Pizza Base Chica 22Cms",
    precio: "$4.000",
    img: pizzachica
  },
  {
    nombre: "Pizza Base Mediana 32Cms",
    precio: "$8.000",
    img: pizzamediana
  },
  {
    nombre: "Pizza Base Grande 38Cms",
    precio: "$9.000",
    img: pizzagrande
  },

  ]


  return (
    <div className='extrasPantallaPrincipal'>
      <h2 ref={ref} className='tituloExtras'>{titulo}</h2>
      <div className="contenedorExtras">
        {extras.map((e, index) =>
            <ExtrasTarjeta key={index} imagen={e.img} nombreExtra={e.nombre} nombrePrecio={e.precio}/>
          )}
      </div>
    </div>
  )
}

export default forwardRef(Extras)