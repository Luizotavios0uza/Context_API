import { useState } from "react";
import { ComponentB } from "../Component B/ComponentB";
import { Context } from "../Contexto/Contexto";
export function ComponenteA() {
    const [contador, setContador] = useState(0);
    return(
        <Context.Provider value={[contador, setContador]}>
        <div>
            <h1>Componente A</h1>
            <h3>Valor: {contador}</h3>
            <button onClick={() => setContador(contador + 1)}></button>
        </div>
        <ComponentB></ComponentB>
        </Context.Provider>
    )
}