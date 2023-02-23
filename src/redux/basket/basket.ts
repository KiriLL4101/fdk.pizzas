import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ProductUnion } from '../product/types'

export interface BasketSliceState {
  totalPrice: number
  items: Array<ProductUnion>
  visibleBar: boolean
}

const initialState: BasketSliceState = {
  items: [],
  totalPrice: 0,
  visibleBar: false,
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ProductUnion>) {
      state.items.push(action.payload)
      state.totalPrice = state.items.reduce((sum, val) => val.price + sum, 0)
    },
    minusItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((val) => val.id !== String(action.payload))
      state.totalPrice = state.items.reduce((sum, val) => val.price + sum, 0)
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((val) => val.id !== String(action.payload))
      state.totalPrice = state.items.reduce((sum, val) => val.price + sum, 0)
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
    showBasket(state) {
      state.visibleBar = true
    },
    hideBasket(state) {
      state.visibleBar = false
    },
  },
})

// export const selectCart = (state: RootState) => state.cart

// export const selectCartItemById = (id: number) => (state: RootState) =>
//   state.cart.items.find((obj) => obj.id === id)

export const { addItem, removeItem, clearItems, showBasket, hideBasket } = basketSlice.actions

export default basketSlice.reducer
