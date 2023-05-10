import "./NavBar.css"
import miaMassaLogo from "../image/miamassalogo.jpg"

const NavBar = ({handleClickPromociones, handleClickContacto, handleClickEspecialidades, handleClickExtras,handleClickAgregados}) => {

  return (
    <div className='divNavBar'>
      <img className='miamassalogo' src={miaMassaLogo} alt="" />
      <div className='header-info'>
        <p onClick={() => handleClickPromociones()} className='botonHeader'>Promociones</p>
        <p onClick={() => handleClickEspecialidades()} className='botonHeader'>Especialidades</p>
        <p onClick={() => handleClickAgregados()} className='botonHeader'>Agregados</p>
        <p onClick={() => handleClickExtras()} className='botonHeader'>Extras</p>
        <p onClick={() => handleClickContacto()} className='botonHeader'>Contacto</p>
      </div>
    </div>

  )
}

export default NavBar