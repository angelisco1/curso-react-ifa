import { useInput } from "./hooks/useInput"

const Input = ({label, type, initialValue, validations}) => {
  const [value, setValue, errors] = useInput(initialValue, validations)

  return (
    <div>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type={type}
        name={label.toLowerCase()}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {errors.length > 0 && <ul>
        {errors.map((msg) => <li key={msg}>{msg}</li>)}
      </ul>}
    </div>
  )
}

export default Input