import { useState } from "react";
import Botao from "./botao";

function Contador({ valorInicial, quantidade = 3 }) {
    const [contador, setContador] = useState(valorInicial)

    return (
        <div>
            <Botao text="-" quantidade={quantidade} onClick={() => setContador(contador - quantidade)}/>
            <Botao text="+" quantidade={quantidade} onClick={() => setContador(contador + quantidade)}/>
            <h1>{contador}</h1>
            <Botao text="resetar" onClick={() => setContador(valorInicial)}/>
        </div>
    )
}

export default Contador;