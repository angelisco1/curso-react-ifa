import { useEffect, useState } from "react"

const Validators = {
  minLength: (value, length) => {
    if (value.length <= length) {
      return `El usuario tiene que tener ${length + 1} letras`
    }
    return null
  },
  hasNumbers: (value) => {
    if (!/[0-9]{1,}/.test(value)) {
      return 'Tiene que tener números'
    }
    return null
  },
  hasLetters: (value) => {
    if (!/[a-zA-Z]{1,}/.test(value)) {
      return 'Tiene que tener letras'
    }
    return null
  }
}

export const useInput = (initialValue, validations = {}) => {
  const [value, setValue] = useState(initialValue)
  const [errors, setErrors] = useState([])


  useEffect(() => {
    const errores = []

    Object.entries(validations).forEach((validationData) => {
      const [tipo, option] = validationData
      const validationFn = Validators[tipo]
      const error = validationFn(value, option)
      if (error) {
        errores.push(error)
      }
    })

    setErrors(errores)
  }, [value])


  return [
    value,
    setValue,
    errors,
  ]
}