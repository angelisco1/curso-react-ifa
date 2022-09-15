import { useEffect, useReducer } from "react"


const reducer = (state, action) => {
  switch(action.type) {
    case 'ArrowUp':
      return { ...state, posY: state.posY - 5 }
    case 'ArrowDown':
      return { ...state, posY: state.posY + 5 }
    case 'ArrowLeft':
      return { ...state, posX: state.posX - 5 }
    case 'ArrowRight':
      return { ...state, posX: state.posX + 5 }
    default:
      return state
  }
}


const Cmp10UseReducer = () => {
  const [value, dispatch] = useReducer(reducer, {posX: 0, posY: 0})

  const moverLaCaja = (event) => {
    console.log(event.key)
    dispatch({type: event.key})
  }

  useEffect(() => {
    window.addEventListener('keyup', moverLaCaja)
    return () => window.removeEventListener('keyup', moverLaCaja)
  }, [])

  return (
    <div style={{position: 'relative'}}>
      <h2>useReducer</h2>

      <div className="caja" style={{top: value.posY, left: value.posX}}></div>
    </div>
  )
}

export default Cmp10UseReducer