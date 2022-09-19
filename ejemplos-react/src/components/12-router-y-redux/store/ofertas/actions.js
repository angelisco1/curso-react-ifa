import * as ActionTypes from './action-types'

export const publicarOferta = (oferta) => {
  return {
    type: ActionTypes.PUBLICAR_OFERTA,
    payload: oferta
  }
}

export const inicializarOfertas = (ofertas) => {
  return {
    type: ActionTypes.INICIALIZAR_OFERTAS,
    payload: ofertas
  }
}