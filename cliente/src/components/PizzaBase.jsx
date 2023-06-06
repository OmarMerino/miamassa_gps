import React, { forwardRef, useEffect, useState } from 'react'
import "./PizzaBase.css"
import pizzachica from "../image/pizzachica.jpg"
import pizzamediana from "../image/pizzamediana.jpg"
import pizzagrande from "../image/pizzagrande.jpg"

const PizzaBase = ({ titulo }, ref) => {
    const base = [
        {
            nombre: "Pizza Base Grande 38Cms",
            precio: "$9.000",
            img: pizzagrande
        },
        {
            nombre: "Pizza Base Mediana 32Cms",
            precio: "$8.000",
            img: pizzamediana
        },
        {
            nombre: "Pizza Base Chica 22Cms",
            precio: "$4.000",
            img: pizzachica
        }
    ]

    return (
        <div className='pizzaBasePantallaPrincipal'>
            <h2 ref={ref}>{titulo}</h2>
            <div className="scrollTarjetasPizzaBase">
                <div className="containerPizzaBase">
                    {base.map((e, index) =>
                        <div className='tarjetaPizzaBase' key={index}>
                            <img src={e.img} alt="" />
                            <h3>{e.nombre}</h3>
                            <div className="figurePizzaBase">
                                <h4>{e.precio}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default forwardRef(PizzaBase)