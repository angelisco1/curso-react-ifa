import { useState } from "react"
import Cuenta from "./Cuenta"

const Cmp03Estados = () => {
  const [cuenta, setCuenta] = useState(0)

  const decrementar = () => {
    setCuenta(cuenta - 1)
  }

  return (
    <div>
      <h2>Estados</h2>

      <p>Cuenta: {cuenta}</p>
      <button type="button" onClick={() => setCuenta(cuenta + 1)}>Incrementar cuenta en 1</button>
      <button type="button" onClick={decrementar}>Decrementar cuenta en 1</button>

      <Cuenta cuenta={cuenta} />
    </div>
  )
}

export default Cmp03Estados