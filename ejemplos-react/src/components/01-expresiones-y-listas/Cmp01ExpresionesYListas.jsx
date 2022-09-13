const Cmp01ExpresionesYListas = () => {
  const nombre = 'Charly'
  const apellido = 'Falco'
  const getNombreCompleto = () => {
    return nombre + ' ' + apellido
  }
  const datosImagen = {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
    titulo: 'Logo de React'
  }
  const isLoggedIn = false
  const series = [
    { id: 1, titulo: 'House of the Dragon', finalizada: false },
    { id: 2, titulo: 'Game of Thrones', finalizada: true },
    { id: 3, titulo: 'The Walking Dead', finalizada: false },
    { id: 4, titulo: 'The expanse', finalizada: true },
  ]
  // [<li>{titulo}</li>, <li>{titulo}</li>, <li>{titulo}</li>, <li>{titulo}</li>]
  return (
    <div>
      <h2>Expresiones</h2>
      <p>Se llama: {nombre} {apellido}</p>
      <p>Se llama: {getNombreCompleto()}</p>
      <p>Se llama: {nombre + ' ' + apellido}</p>

      <img src={datosImagen.url} alt={datosImagen.titulo} width="100" />

      <button type="button" disabled={true}>Click 1</button>
      <button type="button" disabled={false}>Click 2</button>

      <h2>Condicionales</h2>
      {isLoggedIn ? <button>Logout</button> : null}
      {isLoggedIn && <button>Logout</button>}

      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}

      <h2>Listas</h2>
      <ul>
        {series.map((serie, index) => {return <li key={serie.id}>{serie.titulo}</li>})}
      </ul>
      <ul>
        {
          series
            .filter(serie => {
              console.log(serie)
              return !serie.finalizada
            })
            .map((serie, i) => <li key={serie.id}>{serie.titulo}</li>)
        }
      </ul>

    </div>
  )
}

// var a = 0;

// function Cmp01ExpresionesYListas2() {
//   a = 1
//   let b = 1
//   if (true) {
//     var a = 2
//     let b = 2
//     console.log('Dentro IF', a, b)
//   }
//   console.log('Dentro', a, b)
// }

// Cmp01ExpresionesYListas2()
// console.log('Fuera', a)

export default Cmp01ExpresionesYListas
