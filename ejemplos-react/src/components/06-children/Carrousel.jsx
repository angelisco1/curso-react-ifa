import { useState } from "react"

const Carrousel = (props) => {
  console.log({props})
  const [actualPos, setActualPos] = useState(0)

  const mostrarAnterior = () => {
    if (actualPos === 0) {
      setActualPos(props.children.length - 1)
    } else {
      setActualPos(actualPos - 1)
    }
  }

  const mostrarSiguiente = () => {
    if (actualPos === props.children.length - 1) {
      setActualPos(0)
    } else {
      setActualPos(actualPos + 1)
    }
  }

  const mostrarElemento = (pos) => {
    setActualPos(pos)
  }


  return (
    <div>
      <button type="button" onClick={mostrarAnterior}>Prev</button>
      <div>
        {props.children[actualPos]}
      </div>
      <button type="button" onClick={mostrarSiguiente}>Next</button>
      {props.children.map((elem, index) => <button key={index} type="button" onClick={() => mostrarElemento(index)}>{index}</button>)}
    </div>
  )
}

export default Carrousel