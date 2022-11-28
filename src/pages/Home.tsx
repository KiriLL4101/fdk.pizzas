import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

import PizzaCard from '../components/PizzaCard/PizzaCard'
import { SkeletonPizzaCard } from '../components/PizzaCard'
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import useUpdateEffect from '../hooks/useUpdateEffect'
import { Pagination } from '../components/Pagination'
import { selectFilter, setCurrentPage, setFilters, SortPropertyEnum } from '../redux/slices/filters'
import { fetchPizzas } from '../redux/slices/pizzasAsyncAction'
import { selectPizzaData } from '../redux/slices/pizzas'

const Home: React.FC = () => {
  const { items, status } = useAppSelector(selectPizzaData)
  const { categoryId, sort, currentPage, searchValue } = useAppSelector(selectFilter)

  const dispatch = useAppDispatch()

  const isSearch = useRef(true)

  const navigate = useNavigate()

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

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
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: params.category,
          currentPage: params.currentPage,
          sort: {
            name: 'популярности',
            sortProperty: SortPropertyEnum.RATING_DESC,
          },
        }),
      )
      isSearch.current = false
    }
  }, [])

  useEffect(() => {
    getPizzas()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  useUpdateEffect(() => {
    const queryString = qs.stringify({
      sortBy: sort.sortProperty,
      category: categoryId,
      search: searchValue,
      currentPage: String(currentPage),
    })

    navigate(`?${queryString}`)
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pizzas = items.map((pizza) => <PizzaCard key={pizza.id} id={pizza.id} {...pizza} />)

  const skeletons = [...new Array(4)].map((_, index) => <SkeletonPizzaCard key={index} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  )
}

export default Home
