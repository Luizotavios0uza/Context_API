import { useState } from "react";
import { ContextoOla } from "../Contexto/ContextoOla";
export function HelloWorld() {
    const [texto, setTexto] = useState('Olá Mundo!');
    return (
        <ContextoOla.Provider value={[texto, setTexto]}>
             <div>
                <p>{texto}</p>
             </div>
        </ContextoOla.Provider>
    )
}