const URL = 'https://fluentjobs-fa22e.firebaseio.com/react-ifa/angel/ofertas'

export const createOferta = (oferta) => {
  return fetch(URL + '.json', {
    method: 'POST',
    body: JSON.stringify(oferta)
  })
    .then(resp => resp.json())
}

export const getOfertas = () => {
  return fetch(URL + '.json')
    .then(resp => resp.json())
    .then(data => {
      const ofertas = []

      for (let id in data) {
        ofertas.push({ ...data[id], id })
      }

      return ofertas
    })
}

export const getOferta = (idOferta) => {
  return fetch(`${URL}/${idOferta}.json`)
    .then(resp => resp.json())
}