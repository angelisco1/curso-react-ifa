import * as ActionTypes from './action-types'

const initialState = {
  ofertas: []
}

const guardarOferta = (state, nuevaOferta) => {
  return {
    ofertas: [...state.ofertas, nuevaOferta]
  }
}

export const ofertasReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PUBLICAR_OFERTA:
      return guardarOferta(state, action.payload)
    case ActionTypes.INICIALIZAR_OFERTAS:
      return { ofertas: action.payload }
    default:
      return state
  }
}