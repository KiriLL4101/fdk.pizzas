import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import App from './App'

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement!)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,
)
