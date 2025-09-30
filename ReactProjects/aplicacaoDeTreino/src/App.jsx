import './App.css'
import Contador from './components/contador'

function App() {

  return (
    <>
      <div>
        <Contador valorInicial={10} quantidade={5} min={0} max={1000} />
        <Contador valorInicial={20} quantidade={5} min={0} max={200} />
        <Contador valorInicial={100} quantidade={5} min={0} max={1100} />
        <Contador valorInicial={1} quantidade={5} min={0} max={10}/>
      </div>
    </>
  )
}

export default App
