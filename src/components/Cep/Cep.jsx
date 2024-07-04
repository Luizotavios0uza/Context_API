import { number } from "prop-types";
import { useEffect, useState } from "react";

export function Cep() {

    const [endereco, setEndereco] = useState("");
    const [cep, setValor] = useState("89265-560");
    
    useEffect(() => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((number) => {
      setEndereco(number)
    }).catch(error => {
      console.log(error)
    })
    })

    function Alterar() {
    const texto = document.getElementById("alterarend").value;
    setValor(texto.trim())
    }
    return(
       <>
       <h1>Insira seu Cep</h1>

       <input type="text" id="alterarend" onChange={Alterar}></input>

       <h1>Endereço completo</h1>

       <p>Lugradouro: {endereco.logradouro} </p>

       <p>Complemento: {endereco.complemento} </p>
       
       <p>Bairro: {endereco.bairro} </p>

       <p>Localidade: {endereco.localidade} </p>
      
       </>
    )

}