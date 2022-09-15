import Input from "./Input"

const Cmp09FormulariosYCustomHook = () => {
  // const [usuario, setUsuario, usuarioErrors] = useInput('', {minLength: 4})
  // const [password, setPassword, passwordErrors] = useInput('', {minLength: 6, hasNumbers: true, hasLetters: true})


  const login = (event) => {
    event.preventDefault()
    console.log(usuario, password)
    // POST /login
  }

  return (
    <div>
      <h2>Formulario con custom hook</h2>

      <form onSubmit={login}>
        {/* <div>
          <label htmlFor="usuario">Usuario</label>
          <input type="text" name="usuario" value={usuario} onChange={(event) => setUsuario(event.target.value)} />
          {usuarioErrors.length > 0 && <ul>
            {usuarioErrors.map((msg) => <li key={msg}>{msg}</li>)}
          </ul>}
        </div> */}
        <Input
          label="Usuario"
          type="text"
          initialValue=""
          validations={{minLength: 4}}
        />
        {/* <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          {passwordErrors.length > 0 && <ul>
            {passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
          </ul>}
        </div> */}
        <Input
          label="Password"
          type="password"
          initialValue=""
          validations={{minLength: 6, hasNumbers: true, hasLetters: true}}
        />
        <button type="submit">Login</button>
      </form>


    </div>
  )
}

export default Cmp09FormulariosYCustomHook