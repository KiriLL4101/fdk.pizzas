import React, { useEffect, useState } from 'react'
import axios from 'axios'

import PizzaCard, { PizzaCardProps } from '../components/PizzaCard/PizzaCard'
import { SkeletonPizzaCard } from '../components/PizzaCard'
import Sort from '../components/Sort'
import Categories from '../components/Categories'
import { useAppSelector } from '../hooks/redux'
import { Pagination } from '../components/Pagination'

const Home: React.FC = () => {
  const { categoryId, sortBy, search, currentPage } = useAppSelector((state) => state.filter)

  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        `https://63808130786e112fe1b1933c.mockapi.io/items?p=${currentPage}&l=4&title=${search}&sortBy=${sortBy}&order=desc${
          categoryId ? `&category=${categoryId}` : ''
        }`,
      )
      .then(({ data }) => {
        setPizzas(data)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortBy, search, currentPage])

  const items = pizzas.map((pizza: PizzaCardProps & { id: number }) => (
    <PizzaCard key={pizza.id} {...pizza} />
  ))

  const skeletons = [...new Array(6)].map((_, index) => <SkeletonPizzaCard key={index} />)

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
