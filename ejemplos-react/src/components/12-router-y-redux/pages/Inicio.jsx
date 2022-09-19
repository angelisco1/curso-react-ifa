import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import OfertaItem from "../components/OfertaItem"

const Inicio = () => {
  // const [ofertas, setOfertas] = useState([])
  const listaOfertas = useSelector(state => state.ofertasReducer.ofertas)

  // useEffect(() => {
  //   getOfertas()
  //     .then(data => setOfertas(data))
  // }, [])

  return (
    <div>
      <h3>Inicio</h3>

      {listaOfertas.map(oferta => <OfertaItem key={oferta.id} id={oferta.id} titulo={oferta.titulo} empresa={oferta.empresa} />)}

      <hr />
      <Outlet />
    </div>
  )
}

export default Inicio