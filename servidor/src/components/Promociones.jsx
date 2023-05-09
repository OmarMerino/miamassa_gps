import React, { forwardRef } from 'react'
import "./Promociones.css"
import SimpleSlider from './SimpleSlider'

const Promociones = ({ titulo }, ref) => {
  return (
    <div className='promocionesPantallaPrincipal'>
      <h2 ref={ref}>{titulo}</h2>
      <div style={{display:"flex",justifyContent:"center"}}>
        <SimpleSlider />
      </div>
    </div>
  )
}

export default forwardRef(Promociones)