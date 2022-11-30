import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Basket from './pages/Basket/Basket'
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
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!location.pathname.includes('menu') && <Footer />}
    </>
  )
}

export default App

{
  /* <Header />
<div className="content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
          <Categories />
        <Discount />
        <Address />
        <Block items={items} title={'Пицца'} />
</div> */
}
