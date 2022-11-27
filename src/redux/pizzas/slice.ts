import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { fetchPizzas } from './asyncAction'

export type Pizza = {
  id: number
  title: string
  price: number
  imageUrl: string
  sizes: number[]
  types: number[]
  rating: number
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchPizzaParams = {
  sortBy: string
  order: string
  category: string
  search: string
  currentPage: string
}

export interface PizzaSliceState {
  items: Pizza[]
  status: Status
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
}

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR
      state.items = []
    })
  },
})

export const selectPizzaData = (state: RootState) => state.pizzas

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
