import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './filters/slice'
import cartReducer from './cart/slice'
import pizzasReducer from './pizzas/slice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
