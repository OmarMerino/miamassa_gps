import React, { forwardRef } from 'react'
import "./Extras.css"

const Extras = ({ titulo }, ref) => {
  return (
    <div className='extrasPantallaPrincipal'>
        <h2 ref={ref}>{titulo}</h2>
    </div>
  )
}

export default forwardRef(Extras)