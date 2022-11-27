import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addItem } from '../../redux/slices/cartSlice'

export interface PizzaCardProps {
  id: number
  imageUrl: string
  title: string
  types: Array<0 | 1 | 2>
  sizes: Array<26 | 30 | 40>
  price: number
  category: number
  rating: number
}

const typeNames = ['тонкое', 'традиционное']

const PizzaCard: React.FC<PizzaCardProps> = (props) => {
  const { id, imageUrl, title, types, sizes, price } = props

  const addedCount = useAppSelector((state) => state.cart.items.filter((v) => v.id === id))
  const dispatch = useAppDispatch()

  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)

  const onAddPizza = () => {
    dispatch(
      addItem({
        id: id,
        title,
        price,
        imageUrl,
        type: typeNames[activeType],
        size: sizes[activeSize],
      }),
    )
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              key={typeId}
              className={activeType === typeId ? 'active' : ''}
              onClick={() => setActiveType(typeId)}
            >
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, idx) => (
            <li
              key={idx}
              className={activeSize === idx ? 'active' : ''}
              onClick={() => setActiveSize(idx)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add" onClick={onAddPizza}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount.length > 0 && <i>{addedCount.length}</i>}
        </div>
      </div>
    </div>
  )
}

export default PizzaCard
