import { Context } from "../Contexto/Contexto";
import { useContext } from "react";
export function ComponenteC() {
    const [contador, setContador] = useContext(Context);
    return(
        <>
        <div>
            <h1>Componente C</h1>
            <h3>
                Valor contador: {contador}
            </h3>
            <button onClick={() => setContador(0)}></button>
        </div>
        </>
    )
}