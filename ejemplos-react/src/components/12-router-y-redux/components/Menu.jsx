import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nueva-oferta">Nueva oferta</Link></li>
      </ul>
    </div>
  )
}

export default Menu