import { useState } from "react"
import { langCtx } from "./contexts/lang.context"
import Final from "./Final"
import Intermediario from "./Intermediario"

const langs = [
  { codigo: 'es', texto: 'Español' },
  { codigo: 'en', texto: 'Inglés' },
  { codigo: 'it', texto: 'Italiano' },
]

const Cmp05ContextApi = () => {
  const [langSeleccionado, setLangSeleccionado] = useState('es')

  return (
    <div>
      <h2>Context API</h2>

      <select onChange={event => setLangSeleccionado(event.target.value)} value={langSeleccionado}>
        {langs.map(l => <option key={l.codigo} value={l.codigo}>{l.texto}</option>)}
      </select>

      <langCtx.Provider value={langSeleccionado}>
        <Intermediario />
      </langCtx.Provider>

      <hr />

      <Final />

    </div>
  )
}

export default Cmp05ContextApi