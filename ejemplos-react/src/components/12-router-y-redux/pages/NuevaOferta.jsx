import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { createOferta } from "../services/ofertas.service"
import { publicarOferta } from "../store/ofertas/actions"

const NuevaOferta = () => {
  const [titulo, setTitulo] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [salario, setSalario] = useState(18000)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const guardarOferta = (e) => {
    e.preventDefault()
    // Coger datos del form
    const oferta = {
      titulo,
      empresa,
      salario,
      ciudad
    }
    console.log(oferta)
    let idOferta = null
    // POST /ofertas {datos}
    createOferta(oferta)
      .then((datos) => {
        console.log({datos})
        idOferta = datos.name
        const nuevaOferta = {...oferta, id: idOferta}
        const action = publicarOferta(nuevaOferta)
        dispatch(action)
        navigate('/ofertas/' + idOferta)
      })
  }

  return (
    <div>
      <h3>Nueva oferta</h3>

      <form onSubmit={guardarOferta}>
        <div>
          <label htmlFor="titulo">Título</label>
          <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label htmlFor="empresa">Empresa</label>
          <input type="text" name="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
        </div>
        <div>
          <label htmlFor="salario">Salario</label>
          <input type="number" name="salario" value={salario} onChange={(e) => setSalario(e.target.value)} />
        </div>
        <div>
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" name="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
        </div>
        <button type="submit">Crear oferta</button>
      </form>

    </div>
  )
}

export default NuevaOferta