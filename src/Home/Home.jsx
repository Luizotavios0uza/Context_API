import { useContext } from "react";
import { Botao } from "../components/Button/Button";
import { Error } from "../components/Error/ErrorMessage";
import { ShoppingContext } from "../Contexto/ShoppingContext";
import { Login } from "../components/Login";
import { Texto } from "../components/Input/TextInput";
import { Listas } from "../components/ListaShop/ListaShop";
export const Home = () => {
  const {
    addProduct,
    handleProductName,
    listaProdutos,
    mensagemErro,
    produto,
    validate,
  } = useContext(ShoppingContext);

  return (
    <>
      <div>
        <Login />
      </div>

      <div>
        <div>
          <div>
            <Texto
              value={produto}
              label="Nome do Produto"
              id="nome_produto"
              onBlur={validate}
              onChange={handleProductName}
            />
            <Error message={mensagemErro} />
          </div>
          <Botao label="Adicionar" onClick={addProduct} />
          <br />
        </div>
      </div>
      <div>
        <Listas items={listaProdutos} />
      </div>
    </>
  );
};
