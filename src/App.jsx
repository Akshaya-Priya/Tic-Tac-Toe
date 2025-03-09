import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'

function App() {
  let [xplay,setXplay] = useState(1);

  return (
    <>
    <h1>Tic Tak Toe</h1>
    <p>Current Player :{
      xplay?'X':'O'
    }</p>
    <Board turn={xplay} change={setXplay}/>
    </>
  )
}

export default App
