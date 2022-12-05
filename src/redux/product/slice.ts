import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { fetchCombo, fetchDessert, fetchPizzas, fetchSnacks } from './asyncAction'
import { Pizza, Product, ProductSliceState, Status } from './types'

const initialState: ProductSliceState = {
  products: {
    pizzas: [],
    desserts: [],
    snacks: [],
    combo: [],
  },
  selectMenu: [],
  status: Status.LOADING, // loading | success | error
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<Pizza[]>) {
      state.products.pizzas = action.payload
    },
    setActiveMenu(state, action: PayloadAction<Product[]>) {
      state.selectMenu = []
      state.selectMenu = action.payload
    },
    setProduct(
      state,
      action: PayloadAction<{ name: keyof Product; items: Product[keyof Product] }>,
    ) {
      state.products = { ...state.products, [action.payload.name]: action.payload.items }
    },
  },

  extraReducers: (builder) => {
    // Pizzas
    builder.addCase(fetchPizzas.pending, (state) => {
      state.products.pizzas = []
      state.status = Status.LOADING
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.products.pizzas = action.payload
      state.status = Status.SUCCESS
    })

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.products.pizzas = []
      state.status = Status.ERROR
    })

    //Snacks
    builder.addCase(fetchSnacks.pending, (state) => {
      state.products.snacks = []
      state.status = Status.LOADING
    })

    builder.addCase(fetchSnacks.fulfilled, (state, action) => {
      state.products.snacks = action.payload
      state.status = Status.SUCCESS
    })

    builder.addCase(fetchSnacks.rejected, (state) => {
      state.products.snacks = []
      state.status = Status.ERROR
    })

    //Combo
    builder.addCase(fetchCombo.pending, (state) => {
      state.products.combo = []
      state.status = Status.LOADING
    })

    builder.addCase(fetchCombo.fulfilled, (state, action) => {
      state.products.combo = action.payload
      state.status = Status.SUCCESS
    })

    builder.addCase(fetchCombo.rejected, (state) => {
      state.products.combo = []
      state.status = Status.ERROR
    })

    //Dessert
    builder.addCase(fetchDessert.pending, (state) => {
      state.products.desserts = []
      state.status = Status.LOADING
    })

    builder.addCase(fetchDessert.fulfilled, (state, action) => {
      state.products.desserts = action.payload
      state.status = Status.SUCCESS
    })

    builder.addCase(fetchDessert.rejected, (state) => {
      state.products.desserts = []
      state.status = Status.ERROR
    })
  },
})

// export const selectPizzaData = (state: RootState) => state.pizzas

export const { setPizzas, setActiveMenu } = productSlice.actions

export default productSlice.reducer
