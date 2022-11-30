import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './redux/store'

import { SideBarProvider } from './components/BasketSide/BasketItem.context'

import App from './App'

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement!)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <SideBarProvider>
        <App />
      </SideBarProvider>
    </BrowserRouter>
  </Provider>,
)
