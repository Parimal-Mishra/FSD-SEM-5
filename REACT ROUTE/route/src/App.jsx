import React from 'react'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">HOME PAGE</Link>
        <Link to="/about">ABOUT PAGE</Link>
      </nav>
      </BrowserRouter>
    </div>
  )
}

export default App
