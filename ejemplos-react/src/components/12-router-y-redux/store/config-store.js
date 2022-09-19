import { configureStore } from '@reduxjs/toolkit'
import { ofertasReducer } from './ofertas'

export const store = configureStore({
  reducer: {
    ofertasReducer
  }
})