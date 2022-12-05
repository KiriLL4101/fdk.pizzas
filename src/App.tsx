import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { OrderForm } from './pages/OrderForm/OrderForm'
import BasketSide from './components/BasketSide/BasketSide'
import Menu from './pages/Menu/Menu'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './index.scss'

const App = () => {
  const location = useLocation()

  return (
    <>
      {!location.pathname.includes('menu') && <Header />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:type" element={<Menu />} />
          <Route path="/basket" element={<OrderForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!location.pathname.includes('menu') && <Footer />}
      <BasketSide />
    </>
  )
}

export default App
