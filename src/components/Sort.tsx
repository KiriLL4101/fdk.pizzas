import React, { useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setSortBy } from '../redux/slices/filterSlice'

import ArrowTopIcon from 'icon:../assets/img/arrow-top.svg'

const list = {
  rating: 'популярности',
  price: 'цене',
  title: 'алфавиту',
}

const Sort: React.FC = () => {
  const { sortBy } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onChangeSort = (key: string) => {
    dispatch(setSortBy(key))
    setIsOpen(false)
  }

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowTopIcon className={`sort__arrow ${isOpen ? 'open' : ''}`} />
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen((prev) => !prev)}>{list[sortBy]}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {Object.entries(list).map(([key, name], idx) => (
              <li
                key={idx}
                className={sortBy === key ? 'active' : ''}
                onClick={() => onChangeSort(key)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sort
