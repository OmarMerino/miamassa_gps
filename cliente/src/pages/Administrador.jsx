import React, { useState, useEffect } from 'react'
import "./Administrador.css"
import AdministradorTarjetaEspecialidades from '../components/AdministradorTarjetaEspecialidades'
import AdministradorTarjetaAgregados from '../components/AdministradorTarjetaAgregados'
import axios from 'axios'
import AdministradorEspecialidades from '../components/AdministradorEspecialidades'
import { Link } from 'react-router-dom'

const Administrador = () => {
  const [especialidades, setEspecialidades] = useState([])
  const [buscadorEspecialidades, setBuscadorEspecialidades] = useState([])
  const [agregados, setAgregados] = useState([])
  const [buscadorAgregados, setBuscadorAgregados] = useState([])
  const [mapActual, setMapActual] = useState("especialidades")

  useEffect(() => {
    fetchEspecialidades()
    fetchAgregados()

    // Realizar una llamada al servidor cada 5 segundos
    const interval = setInterval(() => {
      fetchEspecialidades()
      fetchAgregados()
    }, 3000)

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval)
  }, [])

  const fetchEspecialidades = () => {
    axios.get('https://deploy-mia-massa-backend.vercel.app/getProductos')
      .then(response => {
        setEspecialidades(response.data)
        setBuscadorEspecialidades(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const fetchAgregados = () => {
    axios.get('https://deploy-mia-massa-backend.vercel.app/getAgregados')
      .then(response => {
        setAgregados(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const renderizarEspecialidades = () => {
    setMapActual("especialidades")
  }

  const renderizarAgregados = () => {
    setMapActual("agregados")
  }

  const handleOnChange = (e) => {
    buscarEspecialidadNombre(e.target.value.toLowerCase())
  }

  const buscarEspecialidadNombre = (palabraBuscada) => {
    const ruti = especialidades.filter(productos => productos.nombre.toLowerCase().includes(palabraBuscada))
    setBuscadorEspecialidades(ruti)
  }

  return (
    <div className='cuerpoAdministrador'>
      <div className="crud">
        <h1>Administrador</h1>
        <div className="tablaDeProductos">
          <div className="coleccion">
            <h1>Colecciones</h1>
            <p onClick={renderizarEspecialidades}>Especialidades</p>
            <p onClick={renderizarAgregados}>Agregados</p>
          </div>
          <div className="documentos">
            <div>
              <h1>Documentos</h1>
              <div className='buscador'>
                <ion-icon name="search-outline" color="white"></ion-icon>
                <input type="text" onChange={handleOnChange} placeholder='Buscar por nombre' />
              </div>
             </div>
          <AdministradorEspecialidades/>

        {mapActual === "especialidades" && buscadorEspecialidades.map((e, index) => (
          <AdministradorTarjetaEspecialidades key={index} nombreDocumento={e.nombre} ingredientesDocumento={e.ingredientes} precioDocumento={e.precio} id={e.id} />
        ))}
        {mapActual === "agregados" && agregados.map((e, index) => (
          <AdministradorTarjetaAgregados key={index} nombreAgregado={e.nombre} tipoAgregado={e.tipo} precioAgregado={e.precio} id={e.id} />
        ))}
      </div>
    </div>
  </div>
  <Link to="/">
    <button style={{ color: "black" }}>VOLVER</button>
  </Link>
</div>)
}

export default Administrador