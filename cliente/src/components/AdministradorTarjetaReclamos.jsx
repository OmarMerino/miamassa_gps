import React, { useState, useEffect } from 'react'
import "./AdministradorTarjetaReclamos.css"
import { db } from "../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";

const AdministradorTarjetaReclamos = () => {
    const [prueba, setPrueba] = useState([])

    const obtenerDatos = async () => {
        const q = query(collection(db, "reclamo"))
        onSnapshot(q, (querySnapshot) => {
            const nom = []
            querySnapshot.forEach((doc) => {
                nom.push({ ...doc.data(), id: doc.id })
            })
            setPrueba(nom)
        })
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

    return (
        <div>
            {prueba.map((e, index) =>
                <div key={index} className='tarjetaReclamo'>
                    <div className='tarjetaDato'>
                        <h3>Nombre:</h3>
                        <p>{e.nombre}</p>
                    </div>
                    <div className='tarjetaDato'>
                        <h3>Número:</h3>
                        <p>{e.numero}</p>
                    </div>
                    <div className='tarjetaDato'>
                        <h3>Reclamo/Sugerencia:</h3>
                        <p>{e.reclamo}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdministradorTarjetaReclamos