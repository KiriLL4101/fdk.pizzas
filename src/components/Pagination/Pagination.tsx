import React from 'react'
import ReactPaginate from 'react-paginate'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCurrentPage } from '../../redux/slices/filters'

import styles from './Pagination.module.scss'

interface PaginationProps {
  currentPage?: number
  onChangePage?: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = () => {
  const currentPage = useAppSelector((state) => state.filter.currentPage)
  const dispatch = useAppDispatch()

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  )
}
