import React, { useState } from 'react'
import "./AdministradorEspecialidades.css"
import axios from 'axios'
import { v4 as uuid } from 'uuid'
//uuid()

const AdministradorEspecialidades = () => {
    const [nombred, setNombred] = useState("")
    const [ingredientesd, setIngredientesd] = useState("")
    const [preciod, setPreciod] = useState("")

    const agregarProducto = async () => {
        if (window.confirm("¿Está seguro que desea agregar esta pizza?")) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: `https://deploy-mia-massa-backend.vercel.app/addProducto`,
                    data: {
                        nombre: nombred,
                        ingredientes: ingredientesd,
                        precio: preciod,
                        imagen: `/${nombred}`
                    }
                });
                setIngredientesd("")
                setNombred("")
                setPreciod("") 
            } catch (err) {
                if (err.response.status === 404) {
                    console.log('Resource could not be found!');
                } else {
                    console.log(err.message);
                }
            }
        }
    }

    const subirImagen = async () => {
        if (window.confirm("¿Está seguro que desea subir esta imagen?")) {
          try {
            const inputImagen = document.getElementById("subirImagen") 
            const file = inputImagen.files[0];
            const formData = new FormData();
            formData.append('imagen', file);
            await axios({
              method: 'put',
              url: `http://localhost:8000/upload/producto/${nombred}`,
              data: formData,
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            console.log('Imagen subida correctamente');
          } catch (err) {
            if (err.response && err.response.status === 404) {
              console.log('Resource could not be found!');
            } else {
              console.log(err.message);
            }
          }
        }
      }


    return (
        <div className='administradorEspecialidades'>
            <div className="nombreDocumentoEspecialidades">
                <p>Nombre</p>
                <input type="text" value={nombred} onChange={(e) => setNombred(e.target.value)} />
            </div>
            <div className="ingredientes">
                <p>Ingredientes</p>
                <input type="text" value={ingredientesd} onChange={(e) => setIngredientesd(e.target.value)} />
            </div>
            <div className="precio">
                <p>Precio</p>
                <input type="text" value={preciod} onChange={(e) => setPreciod(e.target.value)} />
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <ion-icon name="add-circle-outline" onClick={agregarProducto}></ion-icon>
                <ion-icon name="cloud-upload-outline" onClick={subirImagen}></ion-icon>
            </div>
            <input type="file" id='subirImagen'/>
        </div>
    )
}

export default AdministradorEspecialidades