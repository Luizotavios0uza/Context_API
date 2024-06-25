import styles from './Login.module.css'

import { useState } from 'react';

import { useRef } from 'react';

export function Login(props) {
    const emailInputElement = useRef();
    const passwordInputElement = useRef();

        function handleSubmit(event) {
            event.preventDefault();

            const data = {
                email: emailInputElement.current?.value,
                password:  passwordInputElement.current?.value
            }
            console.log(data);
        }

   return(
    <div>
        <form  className={styles.container} onSubmit={handleSubmit}>
            
            <label>
                Digite seu email.
                <input 
                ref={emailInputElement}
                type="email"
                id="credencial"
                placeholder="Digite aqui"
                ></input>
            </label>

            <br />

            <label>
                Digite sua senha.
                <input 
                ref={passwordInputElement}
                type="password"
                id="senha"
                placeholder="Digite aqui"
                ></input>
            </label>

            <br />

            <input type="submit" value="Entrar"/>
        </form>
    </div>
   )
}