import React from 'react'
import "./TarjetaPizza.css"


const TarjetaPizza = ({ nombre, ingredientes, precio, img }) => {
    return (
        <div className='tarjetaPizza'>
            <img src={img} alt="" />
            <h3>{nombre}</h3>
            <p>{ingredientes}</p>
            <div className="figure">
                <h4>{precio}</h4>
            </div>

        </div>
    )
}

export default TarjetaPizza