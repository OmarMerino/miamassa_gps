import React, { forwardRef } from 'react'
import "./Contacto.css"

const Contacto = ({ titulo }, ref) => {
  return (
    <div className='contactoPantallaPrincipal'>
        <h2 ref={ref}>{titulo}</h2>
    </div>
  )
}

export default forwardRef(Contacto)