const Lista = ({datos}) => {
  return (
    <div>
      <ul>
        {datos.map((elem) => <li key={elem.id}>{elem.name}</li>)}
      </ul>
    </div>
  )
}

export default Lista