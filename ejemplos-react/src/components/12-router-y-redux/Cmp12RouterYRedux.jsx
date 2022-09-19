import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import Menu from './components/Menu'
import DetalleOferta from './pages/DetalleOferta'
import Error from './pages/Error'
import Inicio from './pages/Inicio'
import NuevaOferta from './pages/NuevaOferta'
import { getOfertas } from './services/ofertas.service'
import { inicializarOfertas } from "./store/ofertas/actions"

const Cmp12RouterYRedux = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getOfertas()
      .then(data => {
        const action = inicializarOfertas(data)
        dispatch(action)
      })
  }, [])

  return (
    <div>
      <h2>Router y Redux</h2>
      <Menu />

      <Routes>
        {/* <Route path="/" element={<Inicio />} /> */}
        <Route path="/" element={<Navigate to="/ofertas" replace={true} />} />
        <Route path="/nueva-oferta" element={<NuevaOferta />} />
        {/* <Route path="/ofertas/:idOferta" element={<DetalleOferta />} /> */}
        <Route path="/ofertas" element={<Inicio />}>
          <Route path=":idOferta" element={<DetalleOferta />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>


    </div>
  )
}

export default Cmp12RouterYRedux