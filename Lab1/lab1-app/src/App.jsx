import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleClassComponents from './components/SimpleClassComponents.jsx'
import SimpleFunctionalComponents from './components/SimpleFunctionalComponents.jsx'

const Student = {
  id: 1,
  name: "John",
};

const Teacher = {
  id2: 101,
  name2: "Jane",
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleClassComponents />
      <SimpleFunctionalComponents student={{...Student, ...Teacher}}/>
    </>
  )
}

export default App
