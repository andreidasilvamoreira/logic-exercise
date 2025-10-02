import './App.css'
import InputUseRef from './components/useRef'
import GeralHpoks from './components/GeralHooks'
import Temporizador from './components/useEffectTemporizador'
import UsandoMemo from './components/useMemo'

function App() {

  return (
    <>
      <div>
        <InputUseRef/>
        <Temporizador/>
        <UsandoMemo/>
      </div>
    </>
  )
}

export default App
