import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Formulario from "../src/components/Formulario";
import Notas from "./components/Notas";

const Div = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

function App() {
  const [notas, setNotas] = useState([]);

  const [nota, setNota] = useState({});

  useEffect(() => {
    const notasLS = JSON.parse(localStorage.getItem("notas")) ?? [];
    setNotas(notasLS);
    console.log(notasLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(notas));
  }, [notas]);

  const eliminarNota = (id) => {
    const notasActualizados = notas.filter((nota) => nota.id !== id);
    const confirmacion = confirm("¿Deseas Borrar Nota?");
    if (confirmacion) {
      setNotas(notasActualizados);
      return;
    }
  };

  return (
    <Div>
      <Formulario
        nota={nota}
        setNota={setNota}
        notas={notas}
        setNotas={setNotas}
      />
      <Notas eliminarNota={eliminarNota} notas={notas} setNota={setNota} />
    </Div>
  );
}

export default App;
