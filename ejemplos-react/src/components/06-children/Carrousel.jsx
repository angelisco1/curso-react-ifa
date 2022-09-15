import { useEffect, useState } from "react"

const Carrousel = ({ children, time }) => {
  // console.log({props})
  const [actualPos, setActualPos] = useState(0)
  // const it = useRef(0)
  // console.log('ITERACIÓN ' + it.current)

  useEffect(() => {
    // console.log('FUERA DEL RETURN: ', actualPos)
    const idTimeout = setTimeout(() => {
      mostrarSiguiente()
    }, time)

    return () => {
      // console.log('DENTRO DEL RETURN: ', actualPos)
      clearTimeout(idTimeout)
    }
  })

  const mostrarAnterior = () => {
    if (actualPos === 0) {
      setActualPos(children.length - 1)
    } else {
      setActualPos(actualPos - 1)
    }
  }

  const mostrarSiguiente = () => {
    // it.current += 1
    if (actualPos === children.length - 1) {
      setActualPos(0)
    } else {
      setActualPos(actualPos + 1)
    }
  }

  const mostrarElemento = (pos) => {
    setActualPos(pos)
  }


  return (
    <div className="carrousel">
      <div className="carrousel-center">
        <button type="button" className="btn-carrousel" onClick={mostrarAnterior}>Prev</button>
        <div className="carrousel-content">
          {children[actualPos]}
        </div>
        <button type="button" className="btn-carrousel" onClick={mostrarSiguiente}>Next</button>
      </div>
      <div className="carrousel-bottom">
        {children.map((elem, index) => <button key={index} type="button" className={actualPos === index ? 'btn-carrousel-step activado' : 'btn-carrousel-step'} onClick={() => mostrarElemento(index)}></button>)}
      </div>
    </div>
  )
}

export default Carrousel