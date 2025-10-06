import { createContext, useContext } from "react";

export const Contagem = createContext();

export function contadorProvider({ children }) {
    const [contador, setContador] = useState(0)
    function incrementar() {
        setContador((prev) => prev + 1)
    }
    function decrementar() {
        setContador((prev) => prev - 1)
    }
    function resetar() {
        setContador(0);
    }

    return (
        <ContagemContext.Provider value={{ contador, incrementar, decrementar, resetar }}>
            {children}
        </ContagemContext.Provider>
    )
}

export function useContagem() {
    return useContext(ContagemContext)
}