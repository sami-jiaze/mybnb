import React from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'

function App() {
  return (
    <div className='app'>
      <div className="header">header</div>
      <div className="content">
        { useRoutes(routes) }
      </div>
      <div className="footer">footer</div>
    </div>
  )
}

export default App