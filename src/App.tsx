import React, { useEffect, useRef } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import qs from 'qs'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Basket from './pages/Basket'
import Header from './components/Header/Header'

import './index.scss'
import Categories from './components/Categories/Categories'
import Discount from './components/Discount/Discount'
import Address from './components/Address/Address'
import Block from './components/Block/Block'
import Footer from './components/Footer/Footer'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { selectPizzaData } from './redux/slices/pizzas'
import { fetchPizzas } from './redux/slices/pizzasAsyncAction'
import { selectFilter, setFilters, SortPropertyEnum } from './redux/slices/filters'

const App = () => {
  const { items, status } = useAppSelector(selectPizzaData)
  const { categoryId, sort, currentPage, searchValue } = useAppSelector(selectFilter)

  const dispatch = useAppDispatch()

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? String(categoryId) : ''
    const search = searchValue

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    )

    window.scrollTo(0, 0)
  }

  useEffect(() => {
    getPizzas()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  return (
    <>
      <Header />
      <div className="container">
        <Categories />
        <Discount />
        <Address />
        <Block items={items} title={'Пицца'} />
      </div>
      <Footer />
    </>
  )
}

export default App

{
  /* <Header />
<div className="content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</div> */
}
