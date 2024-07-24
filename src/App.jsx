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

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Cephook } from './Cephook/Cephook';

import { ComponenteA } from './Component A/ComponentA';

import { HelloWorld } from './MensagemOla/MensagemOla';

import { Home } from './Home/Home';

import { Sobre } from './Sobre/Sobre';

import { ShoppingContext } from './Contexto/ShoppingContext';

import { Contatar } from './Contato/Contato';

const produtos = [];

function App() {
    const shopList = useShoppingList();
    return (
        <ShoppingContext.Provider value={shopList}>
            <div className="App">
                <Router>
                    <nav className="Links">
                        <Link to='/Home' className='link'>Home</Link>
                        <Link to='/Sobre' className='link'>Sobre</Link>
                        <Link to='/Contato' className='link'>Contatar</Link>
                    </nav>
                    <Routes>
                        <Route path='/Home' element={<Home />} />
                        <Route path='/Sobre' element={<Sobre />} />
                        <Route path='/Contato' element={<Contatar />} />
                    </Routes>
                </Router>
            </div>
        </ShoppingContext.Provider>
    );
}
export default App;