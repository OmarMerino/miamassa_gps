import { useRef, useEffect, useState } from 'react'
import './FrontPage.css'
import Especialidades from "../components/Especialidades"
import NavBar from '../components/NavBar'
import Promociones from '../components/Promociones'
import Agregados from '../components/Agregados'
import Extras from '../components/Extras'
import Contacto from '../components/Contacto'


function FrontPage() {


  const refPromociones = useRef(null);
  const refEspecialidades = useRef(null);
  const refContacto = useRef(null);
  const refAgregados = useRef(null);
  const refExtras = useRef(null);

  const handleClickPromociones = () => {
    refPromociones.current?.scrollIntoView({ block: 'start', blockOffset: 10, behavior: 'smooth' });
  }
  const handleClickEspecialidades = () => {
    refEspecialidades.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const handleClickAgregados = () => {
    refAgregados.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const handleClickContacto = () => {
    refContacto.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const handleClickExtras = () => {
    refExtras.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  

  return (
    <div className='cuerpo'>
      <NavBar 
        handleClickPromociones={handleClickPromociones} 
        handleClickEspecialidades={handleClickEspecialidades} 
        handleClickAgregados={handleClickAgregados}
        handleClickExtras={handleClickExtras} 
        handleClickContacto={handleClickContacto}
        />
      <Promociones ref={refPromociones} titulo={"Promociones!"} />
      <Especialidades ref={refEspecialidades} titulo={"Especialidades"} />
      <Agregados ref={refAgregados} titulo={"Agregados"} />
      <Extras ref={refExtras} titulo={"Extras"}/>
      <Contacto ref={refContacto} titulo={"Contacto"}/>
      <button id='arriba' onClick={volverArriba}>UP</button>
      <div className="footer"><span className='footer'></span></div>
    </div>
  );
}

export default FrontPage;
