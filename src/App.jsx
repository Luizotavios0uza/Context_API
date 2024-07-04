import './App.css';

import { Events } from './components/Events/Events'

import { Texto } from './components/Input/TextInput'

import { Botao } from './components/Button/Button'

import { useState } from 'react';

import { Listas } from './components/ListaShop/ListaShop';

import { Login } from './components/Login';

import { Error } from './components/Error/ErrorMessage';

import { useEffect } from 'react';

import { Cep } from './components/Cep/Cep';

import { useOlaMundo } from './hook/useOlaMundo';

import { useShoppingList } from './hook/useShoppingList';



const produtos = []

function App() {

    const {
        addProduct,
        handleProductName,
        listaProdutos,
        mensagemErro,
        produto,
        validate,
    } = useShoppingList();

    return (
        <div className="App">

            <Events></Events>
            <br />
            <br />

            <Error messagem={mensagemErro} />
            <Texto
                label="Nome do produto"
                id="nome_produto"
                value={produto}
                onChange={handleProductName}
                onBlur={validate}
            />

            <br />

            <Botao
                label="Adicionar"
                onClick={addProduct}
            ></Botao>

            <Listas items={listaProdutos}></Listas>

            <br />

            <Login></Login>

            <br />

            <Cep></Cep>

        </div>

    );

}
export default App;