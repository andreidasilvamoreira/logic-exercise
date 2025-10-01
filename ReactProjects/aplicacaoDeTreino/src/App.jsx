import './App.css'
import Contador from './components/contador'
import Contadorr from './components/useEffect'

function App() {

  return (
    <>
      <div>
        <Contador valorInicial={10} quantidade={5} min={0} max={1000} />
        <Contadorr/>
      </div>
    </>
  )
}

export default App
