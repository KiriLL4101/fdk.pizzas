import React, { createContext, useContext, useState } from 'react'
import BasketSide, { BasketSideProps } from './BasketSide'

const SideBarContext = createContext(null)

export function SideBarProvider({ children }) {
  const [state, setState] = useState<BasketSideProps>({ isOpen: false })

  const onToggle = () => {
    setState({ onClose: onCloseHandler, isOpen: true })
  }

  const onCloseHandler = () => {
    setState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <SideBarContext.Provider value={onToggle}>
      {children}
      <BasketSide {...state} />
    </SideBarContext.Provider>
  )
}

export default function useSideBar() {
  const context = useContext(SideBarContext)
  if (context === undefined) {
    throw new Error('useSideBar hook must be used within a Context Provider')
  }
  return context
}
