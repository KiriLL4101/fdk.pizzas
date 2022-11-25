import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
  categoryId: number
  sortBy: string
}

const initialState: FilterState = {
  categoryId: 0,
  sortBy: 'rating',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    },
  },
})

export const { setCategoryId, setSortBy } = filterSlice.actions

export default filterSlice.reducer
