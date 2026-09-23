import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

// Route is used to design Single PAge Applications
// For this we import 
// It is used to create link between pages as react does not support <a href="">
// There are 3 Concepts Page -> Link -> Path 
// Page is created by functions 
// Link is created by Link to -> It links 
// Path is given by path and it tell that which path do we have to open


function Home(){
  return <h1>This is my Home Page</h1>

}

function About(){
  return <h1>This is my About Page</h1> 

}

function Phone(){
  return <h1>This is my Phone Page</h1>  

}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav style={{justifyContent:"space-around"}}>
        <Link to="/">HOME PAGE</Link> | {" "}
        <Link to="/about">ABOUT PAGE</Link> | {" "}
        <Link to="/phone">PHONE PAGE</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/phone" element={<Phone/>} />
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
