import { useContext } from "react"
import { langCtx } from "./contexts/lang.context"
import { translate } from "./helpers/translate"

const Final = () => {
  const lang = useContext(langCtx)

  return (
    <div>
      <p>Este es el componente final que necesita el lenguaje seleccionado</p>

      <p>{ translate('hola_mundo', lang) }</p>


      <langCtx.Consumer>
        {(l) => {
          return <p>El lenguaje es: {l}</p>
        }}
      </langCtx.Consumer>

    </div>
  )
}

export default Final