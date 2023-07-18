import React, { forwardRef } from 'react'
import "./Contacto.css"
import facebook from "../image/iconos/facebook.png"
import instagram from "../image/iconos/instagram.png"
import whatsapp from "../image/iconos/whatsapp.png"
import mapaPizzeria from "../image/mapaPizzeria.png"


const Contacto = ({ titulo }, ref) => {

  return (
    <div className='contactoPantallaPrincipal'>
      <h2 ref={ref}>{titulo}</h2>
      <div style={{ marginTop: "30px" }}>
        <h4>Realiza tu pedido en cualquiera de nuestras redes</h4>
        <div className='iconosContacto'>
          <a href="https://wa.me/c/56963759468"> <img src={whatsapp} alt="" /></a>
          <a href="https://www.facebook.com/miamassapizzeria"> <img src={facebook} alt="" /></a>
          <a href="https://www.instagram.com/mia_massa/"> <img src={instagram} alt="" /></a>
        </div>
        <h3 style={{ color: "grey" }}>Encuentranos en: Esmeralda #2029, Chillán</h3>
        <div className='mapa'>
          <a href="https://www.google.com/maps/place/Mia+Massa+Pizzer%C3%ADa/@-36.6220412,-72.0780461,17.25z/data=!4m6!3m5!1s0x966929be528dbe0f:0x3038aef6f4d62b34!8m2!3d-36.6222654!4d-72.0761449!16s%2Fg%2F11flgdfymd?entry=ttu"> <img className='imagenMapa' src={mapaPizzeria} style={{ borderRadius: "10px" }} alt="" /></a>
        </div>


      </div>

    </div>
  )
}

export default forwardRef(Contacto)