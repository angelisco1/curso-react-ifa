import { Link } from 'react-router-dom'

const OfertaItem = ({titulo, empresa, id}) => {
  return (
    <div>
      <Link to={'/ofertas/' + id}>{titulo} - ({empresa})</Link>
    </div>
  )
}

export default OfertaItem