import { useState, useEffect } from "react";

function Contadorr() {
  const [numero, setNumero] = useState(0);

    useEffect(() => {
    setMensagem(`O contador está em ${contador}`);
  }, [contador]);

  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={() => setNumero(numero + 1)}>+</button>
    </div>
  );
}

export default Contadorr;