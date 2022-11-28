import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setCategoryId } from '../redux/slices/filters'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories: React.FC = () => {
  const { categoryId } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx))
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((value, idx) => (
          <li
            key={idx}
            onClick={() => onChangeCategory(idx)}
            className={categoryId === idx ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
