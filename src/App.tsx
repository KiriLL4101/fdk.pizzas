import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Basket from './pages/Basket'
import Header from './components/Header'

import './assets/scss/app.scss'

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
