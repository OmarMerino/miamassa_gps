import React from 'react'
import "./ExtrasTarjeta.css"
const ExtrasTarjeta = ({imagen,nombreExtra,nombrePrecio}) => {
  return (
    <div className='extrasTarjetaCuerpo'>
        <img src={imagen} className='imagenExtras' alt="" />
        <h2 className='nombreExtra'>{nombreExtra}</h2>
        <h2 className='precioExtra'>{nombrePrecio}</h2>
    </div>
  )
}

export default ExtrasTarjeta