import { withSpinner } from './hocs/withSpinner'

const Cmp11Hoc = () => {

  const ListaWithSpinner = withSpinner(Lista, 'https://jsonplaceholder.typicode.com/users')
  // const ListaWithSpinner = withSpinner(({datos}) => <p>Hola Mundo</p>, 'https://jsonplaceholder.typicode.com/users')


  return (
    <div>
      <h2>Higher Order Components</h2>
      <ListaWithSpinner />
    </div>
  )
}

export default Cmp11Hoc