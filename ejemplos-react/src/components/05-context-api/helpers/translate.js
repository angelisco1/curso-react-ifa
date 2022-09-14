const traducciones = {
  es: {
    hola_mundo: 'hola mundo',
    adios: 'adios',
  },
  en: {
    hola_mundo: 'hello world',
    adios: 'bye bye',
  },
  it: {
    hola_mundo: 'ciao monde',
    adios: 'aaaaa',
  },
}

export const translate = (texto, lang) => {
  return traducciones[lang][texto]
}