import React, { useState } from 'react'
import { db } from "../firebase"
import { setDoc, doc } from "firebase/firestore"
import "./Sugerencia.css"
import { v4 as uuid } from 'uuid'; //nos genera id

const Sugerencia = ({ isOpen, cerrar }) => {
    const [nombre, setNombre] = useState('')
    const [numero, setNumero] = useState('')
    const [reclamo, setReclamo] = useState('')


    const handleModalDialogClick = (e) => {
        e.stopPropagation()
    }

    const guardarReclamoSugerencia = async () => {
        if (nombre.trim() === '' || numero.trim() === '' || reclamo.trim() === '') {
          alert('Falta ingresar un dato');
          return; // Detener la ejecución si los campos están vacíos
        }
    
        if (window.confirm('Seguro que desea enviar estos datos?')) {
          const docData = {
            nombre: nombre,
            numero: numero,
            reclamo: reclamo
          }
          await setDoc(doc(db, "reclamo",uuid()), docData)
          setNombre('')
          setNumero('')
          setReclamo('')
          cerrar()
        }
      }

    return (
        <div className={isOpen ? "sugerenciaModalFondo" : "sugerenciaModalFondoCerrado"} onClick={cerrar}>
            <div className='sugerenciaModal' onClick={handleModalDialogClick}>
                <h1>Mia Massa</h1>
                <h3>Deja tu sugerencia o reclamo aquí</h3>
                <div className="formulario">
                    <div>
                        <p>Nombre</p>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <p>Número de telefono</p>
                        <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </div>
                    <div>
                        <p>Reclamo/sugerencia</p>
                        <textarea rows={12} cols={40} value={reclamo} onChange={(e) => setReclamo(e.target.value)} />
                    </div>
                </div>
                <div className='sugerenciaBotones'>
                    <button className='cerrarFormulario' onClick={cerrar}>CERRAR</button>
                    <button className='enviarFormulario' onClick={guardarReclamoSugerencia}>ENVIAR</button>
                </div>
            </div>
        </div>
    )
}

export default Sugerencia