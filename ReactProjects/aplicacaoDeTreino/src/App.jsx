import './App.css'
import InputUseRef from './components/useRef'
import GeralHpoks from './components/GeralHooks'
import Temporizador from './components/useEffectTemporizador'
import UsandoMemo from './components/useMemo'
import ExemploCallback from './components/useCallback'

function App() {

  return (
    <>
      <div>
        <InputUseRef/>
        <Temporizador/>
        <UsandoMemo/>
        <ExemploCallback/>
      </div>
    </>
  )
}

export default App
