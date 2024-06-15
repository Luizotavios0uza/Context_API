import './App.css';

import { Events } from './components/Events/Events'

import { Texto } from './components/Input/TextInput'

import { Botao } from './components/Button/Button'

function App() {
    return (
    <div className="App">
        <Events></Events>
        <Texto
          label="Nome do produto"
             id="nome_produto"
                onChange={(alve) => console.log(alve.target.value)}/>
        <br />
        <Botao
        label="Adicionar"
        onClick={() => console.log("Clicou")}
        ></Botao>
    </div>
    );
}
export default App;