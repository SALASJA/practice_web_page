import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card/Card.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav></nav>
      </header>
      <Card/>
      <footer>Jorge Industries</footer>
    </>
  )
}

export default App
