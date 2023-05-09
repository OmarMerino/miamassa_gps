import React, { useState } from 'react'
import "./ModalLogin.css"
import { Link } from 'react-router-dom'


const ModalLogin = ({ isOpen, cerrarComponente }) => {
    

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`unidad ${isOpen && 'unidad-open'}`} onClick={cerrarComponente}>
            <div className="loginModal" onClick={handleModalDialogClick}>
                <h2>Iniciar Sesion Administrador</h2>
                <input type="text" placeholder='Usuario' />
                <h2>Contraseña</h2>
                <input type="text" placeholder='Contraseña' />
                <Link to="/administrador">
                    <button>Entrar</button>
                </Link>
            </div>
        </div>
    )
}

export default ModalLogin