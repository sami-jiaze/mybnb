import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'

import routes from './router'
import Header from './components/Header'
import Footer from './components/Footer'
import useScrollTop from './hooks/useScrollTop'

function App() {
  useScrollTop()

  return (
    <div className="app">
      <Header></Header>
      <Suspense fallback="loading">
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App
