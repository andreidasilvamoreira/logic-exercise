import { useState, useEffect } from "react";
import { useContagem } from "../context/contagemContext";
function Temporizador() {
const {contador} = useContagem;
    useEffect(() => {
        return "the count has changed" ;
    }, [contador]);
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


