import { useEffect, useState } from "react"
import Usuario from "../02-propiedades/Usuario"

const URL = 'https://jsonplaceholder.typicode.com/users'

const ListaUsuarios = () => {
  // 1️⃣ Estado para guardar los usuarios
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)

  // 2️⃣ Hacer petición GET a la API y guardar los usuarios en el estado
  useEffect(() => {
    setTimeout(() => {
      fetch(URL)
        .then(resp => resp.json())
        .then(data => {
          console.log({data})
          setUsuarios(data)
          setLoading(false)
        })
    }, 1000)
  }, [])

  return (
    <div>
      {/* 3️⃣ Usar el componente Usuario (del tema 2) para mostrar los usuarios que hay en el array (en el estado) */}
      {loading ? <p>Loading...</p> : usuarios.map(usuario => {
          const [nombre, apellido] = usuario.name.split(' ')
          const u = {
            nombre,
            apellido,
            email: usuario.email
          }
          return <Usuario key={usuario.id} usuario={u} />
        })
      }
    </div>
  )
}

export default ListaUsuarios