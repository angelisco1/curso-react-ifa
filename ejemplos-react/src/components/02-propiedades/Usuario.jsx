const styles = {
  border: '1px solid black',
  borderRadius: '10px',
  width: '50vw',
  textAlign: 'center'
}

// const Usuario = (props) => {
const Usuario = ({ usuario }) => {
  // const nombre = props.usuario.nombre
  // const apellido = props.usuario.apellido
  // const email = props.usuario.email

  // Desestructuración
  // const { nombre, apellido, email } = props.usuario
  const { nombre, apellido, email } = usuario

  return (
    <div style={styles}>
      {/* 👉 Aquí hay que pintar los datos del usuario que llega en las propiedades */}
      <p>{nombre} {apellido} - {email}</p>
    </div>
  )
}

export default Usuario