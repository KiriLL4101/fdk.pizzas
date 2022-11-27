import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import qs from 'qs'

import PizzaCard from '../components/PizzaCard/PizzaCard'
import { SkeletonPizzaCard } from '../components/PizzaCard'
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import useUpdateEffect from '../hooks/useUpdateEffect'
import { Pagination } from '../components/Pagination'
import { setFilters } from '../redux/slices/filterSlice'

const Home: React.FC = () => {
  const { categoryId, sortBy, search, currentPage } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const isSearch = useRef(true)

  const navigate = useNavigate()

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      dispatch(setFilters(params))
      isSearch.current = false
    }
  }, [])

  useEffect(() => {
    if (isSearch.current) {
      setIsLoading(true)
      axios
        .get(
          `https://63808130786e112fe1b1933c.mockapi.io/items?p=${currentPage}&l=4${
            search ? `title=${search}` : ''
          }&sortBy=${sortBy}&order=desc${categoryId ? `&category=${categoryId}` : ''}`,
        )
        .then(({ data }) => {
          setPizzas(data)
          setIsLoading(false)
        })
    }
    isSearch.current = true
    window.scrollTo(0, 0)
  }, [categoryId, sortBy, search, currentPage])

  useUpdateEffect(() => {
    const queryString = qs.stringify({
      categoryId,
      sortBy,
      search,
      currentPage,
    })

    navigate(`?${queryString}`)
  }, [categoryId, sortBy, search, currentPage])

  const items = pizzas.map((pizza) => <PizzaCard key={pizza.id} id={pizza.id} {...pizza} />)

  const skeletons = [...new Array(4)].map((_, index) => <SkeletonPizzaCard key={index} />)

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : items}</div>
      <Pagination currentPage={1} onChangePage={() => {}} />
    </>
  )
}

export default Home
