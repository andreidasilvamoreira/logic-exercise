import './App.css'
import { useState } from 'react'
import InputUseRef from './components/useRef'
import GeralHpoks from './components/GeralHooks'
import Temporizador from './components/useEffectTemporizador'
import UsandoMemo from './components/useMemo'
import ExemploCallback from './components/useCallback'
import { ThemeContext } from './context/themaContext'

function App() {

  const [tema, setTema] = useState("dark")

  function alternarTema() {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <>
      <div className={tema === "dark" ? "dark-theme" : "light-theme"}>
        <ThemeContext.Provider value={{tema, alternarTema}}>
          <Temporizador/>
          <h1>Tema atual {tema}</h1>
          <button onClick={alternarTema}>Mudar tema</button>
        </ThemeContext.Provider>
      </div>
    </>
  )
}

export default App
