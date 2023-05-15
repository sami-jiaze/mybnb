// npm i react-router-dom
// npm i normalize.css
// npm i @craco/craco@alpha -D
// npm i @reduxjs/toolkit react-redux
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'
import 'normalize.css'
import '@/assets/style/reset.scss'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
)
