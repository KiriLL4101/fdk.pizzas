import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pizza, SearchPizzaParams } from './pizzas'
import { pickBy } from '../../utils/pickBy'
import { identity } from '../../utils/identity'

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params
    const { data } = await axios.get<Pizza[]>(`${process.env.API_URL}/items`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 8,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    })

    return data
  },
)
