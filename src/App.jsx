import './App.css';

import { Events } from './components/Events/Events'

import { Texto } from './components/Input/TextInput'

import { Botao } from './components/Button/Button'

import { useState } from 'react';

import { Listas } from './components/ListaShop/ListaShop';

import { Tela } from './components/Display';

import { Login } from './components/Login';

import { Error } from './components/Error/ErrorMessage';

const produtos = []

function App() {

    const [listaProdutos, setlistaProdutos] = useState(produtos);
    const [produto, setProduto] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    return (
    <div className="App">

        <Events></Events>

        <br />
        <br />

        <Error messagem={mensagemErro}/>
        <Texto
          label="Nome do produto"
             id="nome_produto"
             value={produto}
                onChange={(alve) => setProduto(alve.target.value)}
                onBlur={() => {
                    if (produto === "") {
                        return(
                            console.log(mensagemErro),
                            setMensagemErro("Preencha o nome do produto")
                        )
                    } 
                    else {
                        setMensagemErro("")
                    }
                }}
                />
                
        <br />

        <Botao
        label="Adicionar"
        onClick={() => {
            if (produto !== "") {
                return( 
                    setlistaProdutos([...listaProdutos, produto])
                )
            }
            else {
                return(
                setMensagemErro("Preencha o nome do produto"),
                console.log(mensagemErro)
                )
            }
        }}
        ></Botao>

        <Listas items={listaProdutos}></Listas>
        
        <br />

        <Login></Login>

    </div>

    );

}
export default App;