import React, { forwardRef } from 'react'
import "./Contacto.css"

const Contacto = ({ titulo }, ref) => {
  return (
    <div className='contactoPantallaPrincipal'>
      <h2 ref={ref}>{titulo}</h2>
      <div style={{marginTop:"30px"}}>
        <a href="https://wa.me/c/56963759468">Whatsapp</a>
      </div>

    </div>
  )
}

export default forwardRef(Contacto)