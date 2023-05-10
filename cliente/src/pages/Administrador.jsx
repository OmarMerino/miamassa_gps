import React, { useState, useEffect } from 'react'
import "./Administrador.css"
import AdministradorTarjetaEspecialidades from '../components/AdministradorTarjetaEspecialidades'
import AdministradorTarjetaAgregados from '../components/AdministradorTarjetaAgregados'
import axios from 'axios'

const Administrador = () => {
  const [especialidades, setEspecialidades] = useState([])
  const [agregados, setAgregados] = useState([])
  const [mapActual, setMapActual] = useState("especialidades")

  useEffect(() => {
    axios.get('/getProductos')
      .then(response => {
        setEspecialidades(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios.get('/getAgregados')
      .then(response => {
        setAgregados(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderizarEspecialidades = () => {
    setMapActual("especialidades");
  };

  const renderizarAgregados = () => {
    setMapActual("agregados");
  };

  return (
    <div className='cuerpoAdministrador'>
      <div className="crud">
        <h1>Administrador</h1>
        <div className="tablaDeProductos">
          <div className="coleccion">
            <h1>Colecciones</h1>
            <p onClick={renderizarEspecialidades}>Especialidades</p> {/* agregamos onClick */}
            <p onClick={renderizarAgregados}>Agregados</p> {/* agregamos onClick */}
          </div>
          <div className="documentos">
            <h1>Documentos</h1>
            {mapActual === "especialidades" && especialidades.map((e, index) => ( // expresión ternaria para renderizar el map correspondiente
              <AdministradorTarjetaEspecialidades key={index} nombreDocumento={e.nombre} ingredientesDocumento={e.ingredientes} precioDocumento={e.precio} id={e.id} />
            ))}
            {mapActual === "agregados" && agregados.map((e, index) => ( // expresión ternaria para renderizar el map correspondiente
              <AdministradorTarjetaAgregados key={index} nombreAgregado={e.nombre} tipoAgregado={e.tipo}  precioAgregado={e.precio} id={e.id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Administrador