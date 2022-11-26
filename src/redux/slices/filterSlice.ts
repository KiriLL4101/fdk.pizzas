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
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setFilters: (state, action: PayloadAction<FilterState>) => {
      state.currentPage = action.payload.currentPage
      state.categoryId = action.payload.categoryId
      state.sortBy = action.payload.sortBy
      state.search = action.payload.search
    },
  },
})

export const { setCategoryId, setSortBy, setSearch, setCurrentPage, setFilters } =
  filterSlice.actions

export default filterSlice.reducer
