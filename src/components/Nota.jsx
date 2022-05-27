import styled from "@emotion/styled";

const Div = styled.div`
  background-color: white;
  margin-bottom: 10px;
  width: auto;
  height: auto;
  border-radius: 10px;
  box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.03);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Titulo = styled.h2`
  font-size: 18px;
  text-align: center;
`;
const Fecha = styled.p`
  font-size: 14px;
  color: #ff0000;
  text-align: center;
  margin: 0;
`;
const Descripcion = styled.p`
  font-size: 16px;
`;
const Button = styled.button`
  border: none;
  background-color: #f44848;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border-radius: 7px;
  text-transform: uppercase;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  transition: all ease-in-out 0.3s;
  &:hover {
    background-color: #888787;
  }
`;
const ButtonEditar = styled.button`
  border: none;
  background-color: #593abd;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border-radius: 7px;
  text-transform: uppercase;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  transition: all ease-in-out 0.3s;
  &:hover {
    background-color: #888787;
  }
`;
const Svg = styled.svg`
  display: block;
  width: 20px;
  color: white;
`;
const SvgEdit = styled.svg`
  display: block;
  width: 20px;
  color: white;
`;
const Hr = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;
const ContainerBTN = styled.div`
  display: flex;
  gap: 10px;
`;

const Nota = ({ nota, setNota, eliminarNota }) => {
  const { titulo, fecha, descripcion, id } = nota;

  return (
    <Div>
      <Titulo>{titulo}</Titulo>
      <Hr></Hr>
      <Fecha>{fecha}</Fecha>
      <Descripcion>{descripcion}</Descripcion>
      <ContainerBTN>
        <ButtonEditar type="button" onClick={() => setNota(nota)}>
          Editar{" "}
          <span>
            <SvgEdit
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </SvgEdit>
          </span>{" "}
        </ButtonEditar>
        <Button type="button" onClick={() => eliminarNota(id)}>
          Eliminar{" "}
          <span>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </Svg>
          </span>{" "}
        </Button>
      </ContainerBTN>
    </Div>
  );
};

export default Nota;
