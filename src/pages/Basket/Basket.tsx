import React from 'react'
import { Link } from 'react-router-dom'

import NotFound from '../NotFound'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

import { clearItems } from '../../redux/basket/basket'

const Basket = () => {
  const dispatch = useAppDispatch()
  const { items, totalPrice } = useAppSelector((state) => state.basket)


  const clearBasket = () => {
    dispatch(clearItems())
  }

  if (!items.length) {
    return <NotFound />
  }

  return <>Basket page</>
}

export default Basket
