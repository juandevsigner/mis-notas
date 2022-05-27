import styled from "@emotion/styled";
import Nota from "./Nota";

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 60%;
    height: 100vh;
  }
  @media (min-width: 1020px) {
    width: 70%;
  }
`;
const H1 = styled.h1`
  color: #262626;
  margin-top: 20px;
  margin-bottom: 25px;
`;
const NotasContainer = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  width: 90%;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #262626;
    border-radius: 3px;
  }

  @media (min-width: 768px) {
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
    overflow-y: scroll;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Notas = ({ notas, setNota, eliminarNota }) => {
  return (
    <Div>
      {notas.length !== 0 ? (
        <H1>Mis Notas</H1>
      ) : (
        <H1>Aún no tienes Notas D:</H1>
      )}
      <NotasContainer>
        {notas.map((nota) => (
          <Nota
            key={nota.id}
            nota={nota}
            eliminarNota={eliminarNota}
            setNota={setNota}
          />
        ))}
      </NotasContainer>
    </Div>
  );
};

export default Notas;
