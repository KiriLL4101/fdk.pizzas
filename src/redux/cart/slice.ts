import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { calcTotalPrice } from '../../utils/calcTotalPrice'

export type CartItem = {
  id: number
  title: string
  price: number
  imageUrl: string
  type: string
  size: number
  count: number
}

export interface CartSliceState {
  totalPrice: number
  items: CartItem[]
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, 'count'>>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)

      if (findItem) {
        findItem.count--
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.items)
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const selectCart = (state: RootState) => state.cart

export const selectCartItemById = (id: number) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id)

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
