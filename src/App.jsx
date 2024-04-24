import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Project from './Components/Project/Project'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Navbar/> */}
     {/* <About/> */}
     {/* <Contact/> */}
     {/* <Project/> */}
     <Home/>
    </>
  )
}

export default App
