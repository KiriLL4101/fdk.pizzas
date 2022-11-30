import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './filter/slice'
import basketSlice from './basket/basket'
import productSlice from './product/slice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    basket: basketSlice,
    product: productSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
