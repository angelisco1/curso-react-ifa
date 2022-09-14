const Cuenta = ({cuenta, cambiaCuenta}) => {
  // console.log({props})
  return (
    <div>
      <p>Cuenta en un componente inferior: {cuenta}</p>
      {/* <button type="button" onClick={() => props.cuenta = 0}>Reset</button> */}
      <button type="button" onClick={() => cambiaCuenta(0)}>Reset</button>
    </div>
  )
}

export default Cuenta