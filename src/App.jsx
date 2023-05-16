import React from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <div className="content">
        { useRoutes(routes) }
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App