// npm i @craco/craco@alpha -D
// npm i @reduxjs/toolkit react-redux
// npm i react-router-dom
// npm i normalize.css
// npm i -D styled-components@5.3.10
// npm i axios
// npm install antd --save
// npm i classnames

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import 'normalize.css'
import '@/assets/style/index.scss'
import { Provider } from 'react-redux'
import store from './store'
import ThemeA from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={ThemeA}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
)
