import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponents from './components/SimpleClassComponents.jsx'
import SimpleFunctionalComponents from './components/SimpleFunctionalComponents.jsx'
import { Student, Teacher } from './components/helper.js'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import HooksContainer from './components/HooksContainer.jsx'
import ThemeComponent from './components/ThemeComponent.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SimpleClassComponents/>} />
          <Route path="/functional" element={<SimpleFunctionalComponents student={Student} teacher={Teacher}/>} />
          <Route path="/hooks" element={<HooksContainer/>} />
          <Route path="/theme" element={<ThemeComponent/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
