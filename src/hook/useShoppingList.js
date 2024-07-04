import { useEffect, useState } from "react";


const produtos = ['feijão', 'calabresa', 'cheetos']

export function useShoppingList() {

    const [objeto, setObjeto] = useState([]);
    const [listaProdutos, setlistaProdutos] = useState(produtos);
    const [produto, setProduto] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");

    useEffect(() => {
        const armazenado = localStorage.getItem("list");
        console.log(armazenado)
        if (armazenado) {
            setlistaProdutos(JSON.parse(armazenado))
        }
        
    }, []);
    function handleProductName(event) {
        setProduto(event.target.value)
    };

    function addProduct() {
        const listaAtualizada = [...listaProdutos, produto];
        if (produto !== "") {
            return (
                localStorage.setItem(JSON.stringify(listaAtualizada)),
                setlistaProdutos(listaAtualizada),
                setProduto("")
            )
        }
        else {
            return (
                setMensagemErro("Preencha o nome do produto")
            )
        }
    };
    function validate() {
        if (produto === "") {
            console.log(mensagemErro)
                setMensagemErro("Preencha o nome do produto")
        }
        setMensagemErro("")
    }
    return {
        objeto,
        setObjeto,
        listaProdutos,
        produto,
        mensagemErro,
        handleProductName,
        addProduct,
        validate,
    };
}