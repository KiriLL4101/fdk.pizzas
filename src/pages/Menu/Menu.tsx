import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import MainLogo from '../../components/Header/MainLogo'
import Block from '../../components/Block/Block'
import { BasketButton } from '../../components/BasketButton/BasketButton'
import Categories, { categories } from '../../components/Categories/Categories'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchProduct } from '../../redux/product/asyncAction'

import * as styles from './Menu.module.scss'

const Menu = () => {
  const products = useAppSelector((state) => state.product.products)
  const dispatch = useAppDispatch()

  const { type } = useParams()

  useEffect(() => {
    dispatch(fetchProduct(type))
  }, [type])

  return (
    <>
      <div className={styles.header}>
        <MainLogo />
        <Categories inline />
        <div style={{ flex: 1 }} />
        <BasketButton />
      </div>
      <div>
        {products[type] && (
          <Block items={products[type]} title={categories[type]?.name || 'Пицца'} />
        )}
      </div>
    </>
  )
}

export default Menu
