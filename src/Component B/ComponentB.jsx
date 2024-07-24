import { ComponenteC } from "../Componente C/ComponentC";
import { Context } from "../Contexto/Contexto";
import { useContext } from "react";
export function ComponentB() {
    const [contador, setContador] = useContext(Context);
    return(<>
        <div>
            <h1>
                Componente B
            </h1>
            <h3>
                Valor: {contador}
            </h3>
        </div>
        <ComponenteC></ComponenteC>
    </>
    );
};