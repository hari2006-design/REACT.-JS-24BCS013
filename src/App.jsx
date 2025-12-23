import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashborad.jsx'
import Counter from './components/count.jsx'

function App() {
  const [name, setName] = useState("Hari")
  const [occ, setOcc] = useState("Gamer")

  function nameChange() {
    setName("HK")
    console.log("name changed", name)
  }

  return (
    <>
      <Dashboard name={name} occ={occ} nameChange={nameChange} >
      </Dashboard>
      <Counter />
    </>

  )
}


export default App
