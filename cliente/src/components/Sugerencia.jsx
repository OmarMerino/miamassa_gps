import React from 'react'
import "./Sugerencia.css"

const Sugerencia = ({ isOpen, cerrar }) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation()
    }

    return (
        <div className={isOpen ? "sugerenciaModalFondo" : "sugerenciaModalFondoCerrado"} onClick={cerrar}>
            <div className='sugerenciaModal' onClick={handleModalDialogClick}>
                <h1>Mia Massa</h1>
                <h3>Deja tu sugerencia o reclamo aquí</h3>
                <div className="formulario">
                    <div>
                        <p>Nombre</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Número de telefono</p>
                        <input type="number" />
                    </div>
                    <div>
                        <p>Reclamo/sugerencia</p>
                        <textarea
                            rows={12}
                            cols={40}
                        />
                    </div>
                </div>
                <div className='sugerenciaBotones'>
                    <button className='cerrarFormulario' onClick={cerrar}>CERRAR</button>
                    <button className='enviarFormulario'>ENVIAR</button>
                </div>
            </div>
        </div>
    )
}

export default Sugerencia