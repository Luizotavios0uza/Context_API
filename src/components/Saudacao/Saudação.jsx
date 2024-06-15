    export function Saudacao() {
        const periodo = "manhã";
      
        if (periodo === "manhã") {
          return <h1>Bom dia!</h1>;
        }
      
        if (periodo === "tarde") {
          return <h1>Boa tarde!</h1>;
        }
      
        if (periodo === "noite") {
          return <h1>Boa noite!</h1>;
        }
      
        return <h1>Olá, mundo!</h1>;
      }
      
