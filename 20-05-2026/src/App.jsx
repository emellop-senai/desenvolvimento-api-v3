import { useEffect, useState } from 'react'
import './App.css'
import Frutas from './components/Frutas'

function App() {
  const [frutas, setFrutas] = useState([])


  const carregarFrutas = async () => {
    try {
      const res = await fetch('http://localhost:3000/fruits')

      const data = await res.json()
      console.log("frutas", data);
      setFrutas(data)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <button onClick={carregarFrutas}>Carregar Frutas</button>

      <Frutas frutas={frutas} />
    </div>


  )
}

export default App
