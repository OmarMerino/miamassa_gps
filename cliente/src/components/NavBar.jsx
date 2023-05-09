import "./NavBar.css"
import miaMassaLogo from "../image/miamassalogo.jpg"
import { useState } from "react"
import ModalLogin from "./ModalLogin"


const NavBar = ({handleClickPromociones, handleClickContacto, handleClickEspecialidades, handleClickExtras,handleClickAgregados}) => {
  const [abierto, setAbierto] = useState(false)
        const abrirCerrarComponente = () => {
            setAbierto(!abierto)}

  return (
    <div className='divNavBar'>
      <img className='miamassalogo' src={miaMassaLogo} alt="" />
      <div className='header-info'>
        <p onClick={() => handleClickPromociones()} className='botonHeader'>Promociones</p>
        <p onClick={() => handleClickEspecialidades()} className='botonHeader'>Especialidades</p>
        <p onClick={() => handleClickAgregados()} className='botonHeader'>Agregados</p>
        <p onClick={() => handleClickExtras()} className='botonHeader'>Extras</p>
        <p onClick={() => handleClickContacto()} className='botonHeader'>Contacto</p>
        <ion-icon name="person" size="large" onClick={abrirCerrarComponente}></ion-icon>
        <ModalLogin isOpen={abierto} cerrarComponente={abrirCerrarComponente}/>
      </div>
    </div>

  )
}

export default NavBar