import { useMemo, useState } from "react"

const Cmp08FragmentsYMemo = () => {
  const [nombre, setNombre] = useState('Ángel')
  const [apellidos, setApellidos] = useState('Villalba Fdez-Paniagua')
  const [email, setEmail] = useState('angel@gmail.com')

  const nombreCompleto = useMemo(() => {
    console.log('Pasa por aquí')
    return nombre + ' ' + apellidos
  }, [nombre, apellidos])

  return (
    <>
      <h2>Fragments y Memo</h2>

      <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      <input type="text" value={apellidos} onChange={(event) => setApellidos(event.target.value)} />
      <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />

      <p>{nombreCompleto}</p>
      <p>Email: {email}</p>

    </>
  )
}

export default Cmp08FragmentsYMemo