import styles from './Events.module.css';

import { useState } from 'react';

export function Events() {
    const [contador, setContador] = useState(0);

    function handleContar() {
    const valoradicionar = contador + 1;
    setContador(valoradicionar);
    }

    return(
       <>
       <h1>Valor do contador {contador}</h1>
       <button onClick={() => handleContar()}>Adicionar 1</button>
       <br />
       <button onClick={() => setContador(0)}>Remover</button>
       </>
    )
}