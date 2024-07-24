import { Link } from "react-router-dom";
import { Tela } from "../Display/Display";

import { useShoppingContext } from "../context/shoppingContext";

function Navbar() {
  const { listaProdutos } = useShoppingContext();

  return (
    <div>
      <div>
        <h1>MinhaListaDeCompras.com.br</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/quem-somos">Quem somos</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Tela value={listaProdutos.length} />
      </div>
    </div>
  );
}

export default Navbar;