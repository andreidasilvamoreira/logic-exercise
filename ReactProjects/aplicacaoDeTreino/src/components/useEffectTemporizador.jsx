import { useState, useEffect } from "react";

function Temporizador() {
    const [hora, setHora] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setHora(new Date), 1000)
        return () => clearInterval(timer);
    }, []);

    return (
    <div>
      <h2>Relógio em tempo real</h2>
      <p>{hora.toLocaleTimeString()}</p>
    </div>
  );
}

export default Temporizador;

//  exemplos de uso do useEffect


// Mount: roda quando o componente nasce.
// Update: roda quando dependências mudam.
// Unmount: roda quando o componente morre (limpeza).


//  useEffect(() => {
//   console.log("Componente montado!");
//  }, []); // [] = só na montagem


//   useEffect(() => {
//    console.log("Nome atualizado:", nome);
//   }, [nome]); // roda toda vez que `nome` muda


