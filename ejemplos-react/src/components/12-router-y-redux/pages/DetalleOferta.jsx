import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOferta } from '../services/ofertas.service'

const DetalleOferta = () => {
  const {idOferta} = useParams()
  const [oferta, setOferta] = useState(null)

  useEffect(() => {
    getOferta(idOferta)
      .then(data => {
        setOferta(data)
      })
  }, [idOferta])

  return (
    <div>
      {oferta && <div>
        <h3>{oferta.titulo}</h3>
        <p>Empresa: {oferta.empresa}</p>
        <p>Salario: {oferta.salario}</p>
        <p>Ciudad: {oferta.ciudad}</p>
      </div>}
    </div>
  )
}

export default DetalleOferta