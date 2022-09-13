import Sugus from "./Sugus"
import Usuario from "./Usuario"

const Cmp02Propiedades = () => {
  // 👉 Por aquí necesitamos un array con la lista de usuarios
  const listaUsuarios = [
    { id: 1, nombre: 'Charly', apellido: 'Falco', email: 'cfalco@gmail.com' },
    { id: 2, nombre: 'Mike', apellido: 'Kozinski', email: 'koz@gmail.com' },
    { id: 3, nombre: 'John', apellido: 'Wick', email: 'wick@gmail.com' },
  ]

  return (
    <div>
      <h2>Propiedades</h2>
      <Sugus color="red" sabor="fresa" />
      <Sugus color="yellow" sabor="limón" />
      <Sugus color="blue" sabor="piña" />
      {/* <Sugus color="orange" sabor="cereza" /> */}
      <Sugus color="orange" sabor="naranja" />

      <Sugus />

      <h3>Usuarios</h3>
      {/* 👉 Aquí va la lista de componentes de usuarios */}
      {/* {listaUsuarios.map(usuario => <Usuario key={usuario.id} nombre={usuario.nombre} apellido={usuario.apellido} email={usuario.email} />)} */}
      {listaUsuarios.map(usuario => <Usuario key={usuario.id} usuario={usuario} />)}


      {/* <input type="color" />
      <input type="date" />
      <input type="number" /> */}
    </div>
  )
}

export default Cmp02Propiedades