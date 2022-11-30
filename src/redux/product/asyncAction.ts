import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// import { pickBy } from '../../utils/pickBy'
// import { identity } from '../../utils/identity'
import type { Combo, Dessert, Pizza, Product, SearchProductParams, Snacks } from './types'

export const fetchProduct = createAsyncThunk<Product[], string>(
  'pizza/fetchProductStatus',
  async (productName) => {
    const { data } = await axios.get<Product[]>(`${process.env.API_URL}/${productName}`)

    return data
  },
)

export const fetchPizzas = createAsyncThunk<Pizza[]>('pizza/fetchPizzasStatus', async () => {
  const { data } = await axios.get<Pizza[]>(`${process.env.API_URL}/pizzas`)

  return data
})

export const fetchCombo = createAsyncThunk<Combo[]>('pizza/fetchComboStatus', async () => {
  const { data } = await axios.get<Combo[]>(`${process.env.API_URL}/combo`)

  return data
})

export const fetchSnacks = createAsyncThunk<Snacks[]>('pizza/fetchSnacksStatus', async () => {
  const { data } = await axios.get<Snacks[]>(`${process.env.API_URL}/snacks`)

  return data
})

export const fetchDessert = createAsyncThunk<Dessert[]>('pizza/fetchDessertStatus', async () => {
  const { data } = await axios.get<Dessert[]>(`${process.env.API_URL}/dessert`)

  return data
})
