import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChoresList from './components/ChoresList'
import MovieList from './components/MovieList'
import BookList from './components/BookList'
import ShinyButton from './components/Conceptional-Demo1'
import Rainy from './components/Conceptional-Demo2'
import RainOrShine from './components/Conceptional-Demo3'
import DDX from './components/Conceptional-Demo2'
import RainOrShinee from './components/Conceptional-Demo3'
import XDD from './components/Conceptional-Demo3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShinyButton/>
    <Rainy/>
    <RainOrShine/>
    <DDX/>
    <RainOrShinee/>
    <XDD/>
      {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p>*/}
    </>
  )
}

export default App
