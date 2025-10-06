import Botao from "./botao";
import { useContador } from "../context/contagemContext"

function Contador() {
    const { contador, incrementar, decrementar, resetar } = useContador();
    
    return (
        <div>
            <h1>{contador}</h1>
            <Botao text="-" onClick={decrementar} />
            <Botao text="+" onClick={incrementar} />
            <Botao text="resetar" onClick={resetar} />
        </div>
    )
}

export default Contador;
