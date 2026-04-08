import { useState } from 'react'
import { TextArea } from './components/textArea'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pokedex</h1>
      <button onClick={() => setCount((count) => count + 1)}>Incrementar + 1</button>
      <TextArea value={count}/>
    </>
  )
}

export default App
