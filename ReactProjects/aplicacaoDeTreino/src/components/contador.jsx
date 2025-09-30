import { useState } from "react";
import Botao from "./botao";

function Contador({ valorInicial, quantidade = 3, min, max }) {
    const [contador, setContador] = useState(valorInicial)

    function incrementar() {
        if(contador < max) {
            setContador(contador + quantidade)
        }
    }
    function decrementar() {
        if(contador > min) {
            setContador(contador - quantidade)
        }
    }
    return (
        <div>
            <Botao text="-" quantidade={quantidade} onClick={decrementar}/>
            <Botao text="+" quantidade={quantidade} onClick={incrementar}/>
            <h1>{contador}</h1>
            <Botao text="resetar" onClick={() => setContador(valorInicial)}/>
        </div>
    )
}

export default Contador;