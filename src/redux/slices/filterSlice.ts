import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
  categoryId: number
  sortBy: string
  search: string
  currentPage: number
}

const initialState: FilterState = {
  categoryId: 0,
  sortBy: 'rating',
  search: '',
  currentPage: 1,
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
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setPagination: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
})

export const { setCategoryId, setSortBy, setSearch, setPagination } = filterSlice.actions

export default filterSlice.reducer
