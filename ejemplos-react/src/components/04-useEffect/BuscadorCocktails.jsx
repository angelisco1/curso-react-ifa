import { useEffect, useState } from "react"

const URL_COCKTAILS_DB = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const BuscadorCocktails = () => {
  // const [datos, setDatos] = useState({
  //   cocktails: [],
  //   busqueda: '',
  //   cocktailSeleccionado: null
  // })
  const [busqueda, setBusqueda] = useState('mojito')
  const [cocktails, setCocktails] = useState([])
  const [cocktailSeleccionado, setCocktailSeleccionado] = useState(null)

  useEffect(() => {
    // GET a la URL
    fetch(URL_COCKTAILS_DB + busqueda)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCocktails(data.drinks)
      })
  }, [busqueda])


  return (
    <div>
      <h3>Busca tu cocktail</h3>
      {/* Formulario */}
      <input type="text" onChange={(event) => setBusqueda(event.target.value)} />

      {/* Lista de resultados */}
      <ul>
        {cocktails.map(cocktail => <li key={cocktail.idDrink} onClick={() => setCocktailSeleccionado({nombre: cocktail.strDrink, imagen: cocktail.strDrinkThumb})}>{cocktail.strDrink}</li>)}
      </ul>

      {/* Información del cocktail seleccionado */}
      {cocktailSeleccionado ? <div>
        <p>{cocktailSeleccionado.nombre}</p>
        <img width="200" src={cocktailSeleccionado.imagen} alt={'Imagen de ' + cocktailSeleccionado.nombre} />
      </div> : <p>Selecciona un cocktail de la lista</p>}
    </div>
  )
}

export default BuscadorCocktails