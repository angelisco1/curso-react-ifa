const Cuenta = (props) => {
  return (
    <div>
      <p>Cuenta en un componente inferior: {props.cuenta}</p>
      {/* <button type="button" onClick={() => props.cuenta = 0}>Reset</button> */}
    </div>
  )
}

export default Cuenta