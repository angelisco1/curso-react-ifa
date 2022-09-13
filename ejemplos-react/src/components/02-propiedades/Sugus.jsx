import PropTypes from 'prop-types'

const styles = {
  envoltorio: {
    border: '1px solid black',
    width: '100px',
    height: '100px',
    borderRadius: '5px',
    color: 'white',
    position: 'relative',
    margin: '10px',
    overflow: 'hidden'
  },
  letras: {
    textAlign: 'center',
    transformOrigin: 'center center',
    transform: 'rotate(-45deg)',
    position: 'absolute',
    top: '25px',
    left: '30px',
    textShadow: '60px 0px 0px, -60px 0px 0px, -25px 30px 0px, 25px -30px 0px, 30px 30px 0px, -30px -30px 0px, 0px 60px 0px, 0px -60px 0px',
  }
}


// const Sugus = (props) => {
const Sugus = ({ color, sabor }) => {
  // const color = 'red'
  // const sabor = 'fresa'
  // const { color, sabor } = props

  const stylesEnvoltorio = {
    ...styles.envoltorio,
    backgroundColor: color
  }

  return (
    <div style={stylesEnvoltorio}>
      <p style={styles.letras}>{sabor}</p>
    </div>
  )
}

Sugus.propTypes = {
  // color: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['red', 'yellow', 'blue', 'orange']),
  // sabor: PropTypes.string.isRequired
  sabor: (props, propName, componentName) => {
    const saboresSugus = ['fresa', 'limón', 'piña', 'naranja']
    if (!saboresSugus.includes(props[propName])) {
      return new Error(`Me has pasado el valor ${props[propName]} como valor de la propiedad ${propName}, pero no está entre los valores permitidos que son: ${saboresSugus.join(', ')}.`)
    }
  }
}

Sugus.defaultProps = {
  color: 'yellow',
  sabor: 'limón'
}

export default Sugus
