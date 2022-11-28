import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './slices/filters'
import cartReducer from './slices/cart'
import pizzasReducer from './slices/pizzas'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
