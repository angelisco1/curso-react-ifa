import Carrousel from "./Carrousel"

const Cmp06Children = () => {
  return (
    <div>
      <h2>Propiedad children</h2>

      <Carrousel time={3000}>
        <p>Hola mundo</p>
        <p>eee</p>
        <p>123124</p>
      </Carrousel>

      <Carrousel time={1000}>
        <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" />
        <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="" />
        <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="" />
      </Carrousel>

    </div>
  )
}

export default Cmp06Children