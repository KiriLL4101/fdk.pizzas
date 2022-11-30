import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import useUpdateEffect from '../hooks/useUpdateEffect'
// import { selectFilter, setFilters, SortPropertyEnum } from '../redux/filter/slice'
import { fetchCombo, fetchDessert, fetchPizzas, fetchSnacks } from '../redux/product/asyncAction'
// import { selectPizzaData } from '../redux/product/slice'
import Categories from '../components/Categories/Categories'
import Discount from '../components/Discount/Discount'
import Address from '../components/Address/Address'
import Block from '../components/Block/Block'

const successfulLookup = (position) => {
  const { latitude, longitude } = position.coords
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a13c4824aa1e46c28219232d00756956`,
  )
    .then((response) => response.json())
    .then(({ results }) => console.log('city: ', results[0].components.city))
}

const Home: React.FC = () => {
  const { pizzas, combo, snacks, desserts } = useAppSelector((state) => state.product.products)
  // const { categoryId, sort, currentPage, searchValue } = useAppSelector(selectFilter)

  const dispatch = useAppDispatch()

  const isSearch = useRef(true)

  const navigate = useNavigate()

  // const getPizzas = async () => {
  //   const sortBy = sort.sortProperty.replace('-', '')
  //   const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
  //   const category = categoryId > 0 ? String(categoryId) : ''
  //   const search = searchValue

  //   dispatch(fetchPizzas())

  //   dispatch(fetchCombo())

  //   dispatch(fetchSnacks())

  //   dispatch(fetchDessert())

  //   window.scrollTo(0, 0)
  // }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(successfulLookup, (error) => {
  //     console.log('error: ', error)
  //   })

  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1))

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: params.category,
  //         currentPage: params.currentPage,
  //         sort: {
  //           name: 'популярности',
  //           sortProperty: SortPropertyEnum.RATING_DESC,
  //         },
  //       }),
  //     )
  //     isSearch.current = false
  //   }
  // }, [])

  useEffect(() => {
    dispatch(fetchPizzas())

    dispatch(fetchCombo())

    dispatch(fetchSnacks())

    dispatch(fetchDessert())
  }, [])

  // useUpdateEffect(() => {
  //   const queryString = qs.stringify({
  //     sortBy: sort.sortProperty,
  //     category: categoryId,
  //     search: searchValue,
  //     currentPage: String(currentPage),
  //   })

  //   navigate(`?${queryString}`)
  // }, [categoryId, sort.sortProperty, searchValue, currentPage])

  // const pizzas = items.map((pizza) => <PizzaCard key={pizza.id} id={pizza.id} {...pizza} />)

  // const skeletons = [...new Array(4)].map((_, index) => <SkeletonPizzaCard key={index} />)

  return (
    <>
      <Categories />
      <Discount />
      <Address />
      {pizzas.length > 0 && <Block items={pizzas} title={'Пицца'} />}
      {combo.length > 0 && <Block items={combo} title={'Комбо'} />}
      {snacks.length > 0 && <Block items={snacks} title={'Закуски'} />}
      {desserts.length > 0 && <Block items={desserts} title={'Десерты'} />}
    </>
  )
}

export default Home
