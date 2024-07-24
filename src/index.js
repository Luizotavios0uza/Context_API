import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*
const lista = React.createElement("div", {}, 
  React.createElement("h1", {}, "Sabores de sorvete"),
  React.createElement("ul", {}, "Exemplos:"),
  React.createElement("li", {}, "Morango"),
    React.createElement("li", {}, "Baunilha(O melhor)"),
      React.createElement("li", {}, "Flocos"),
        React.createElement("li", {}, "Cesio 137"),
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(lista);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);