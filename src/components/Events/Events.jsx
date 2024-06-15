import styles from './Events.module.css';

import { useState } from 'react';

export function Events() {
    const [nome, setNome] = useState("");
    return(
        <div className={styles.events}>
            <label>Digite sue nome: </label>
            <input type='text' placeholder={nome} onBlur={(event) => setNome(event.target.value)}/>
           <p>O nome digitado é: {nome}</p>
        </div>
    )
}