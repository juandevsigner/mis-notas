import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Div = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-color: #262626;
  height: auto;
  width: auto;
  @media (min-width: 768px) {
    height: 100vh;
    width: 40%;
    flex-direction: column;
  }
  @media (min-width: 1020px) {
    height: 100vh;
    width: 30%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
`;
const Label = styled.label`
  color: #adb1ae;
  font-size: 16px;
`;
const H1 = styled.h1`
  text-align: center;
  margin-top: 20px;
  color: white;
  font-weight: 300;
  margin-bottom: 10px;
  span {
    font-weight: 900;
    color: #262626;
    background-color: #adb1ae;
    padding: 3px 7px;
  }
  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;
const Input = styled.input`
  width: 95%;
  display: inline-block;
  background-color: transparent;
  border: none;
  border-bottom: #adb1ae solid 1px;
  color: #adb1ae;
  padding: 10px;
  font-family: "Quicksand", sans-serif;
`;
const InputTitulo = styled.input`
  width: 95%;
  display: inline-block;
  background-color: transparent;
  border: none;
  border-bottom: #adb1ae solid 1px;
  color: #adb1ae;
  padding: 10px;
  font-family: "Quicksand", sans-serif;
  text-transform: capitalize;
`;
const AreaTxt = styled.textarea`
  width: 95%;
  display: inline-block;
  background-color: transparent;
  border: none;
  border-bottom: #adb1ae solid 1px;
  color: #adb1ae;
  padding: 10px;
  font-family: "Quicksand", sans-serif;
`;
const InputBTN = styled.input`
  display: inline-block;
  width: 100%;
  background-color: #adb1ae;
  color: #262626;
  padding: 15px;
  border: none;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  transition: all ease-in-out 0.3s;
  margin-bottom: 20px;
  &:hover {
    background-color: #f1f1f1;
  }
`;
const Error = styled.p`
  color: #ff0000;
  text-transform: capitalize;
`;
const Nav = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 100px;
`;
const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Svg = styled.svg`
  width: 30px;
  color: white;
  display: block;
  transform: rotate(180deg);
  &:hover {
    color: red;
  }
`;

const Formulario = ({ nota, setNota, notas, setNotas }) => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    if (Object.keys(nota).length > 0) {
      const { titulo, fecha, descripcion } = nota;
      setTitulo(titulo);
      setFecha(fecha);
      setDescripcion(descripcion);
    }
  }, [nota]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([fecha, titulo, descripcion].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objetoNotas = {
      titulo,
      fecha,
      descripcion,
    };
    if (nota.id) {
      objetoNotas.id = nota.id;
      const notasActualizadas = notas.map((notaState) =>
        notaState.id === nota.id ? objetoNotas : notaState
      );
      setNotas(notasActualizadas);
      setNota({});
    } else {
      objetoNotas.id = generarId();
      setNotas([...notas, objetoNotas]);
    }

    setTitulo("");
    setFecha("");
    setDescripcion("");
  };

  return (
    <Div>
      {error && <Error>Por favor llena todos los campos</Error>}
      {modal && (
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="titulo">Titulo</Label>
            <InputTitulo
              onChange={(e) => setTitulo(e.target.value)}
              value={titulo}
              type="text"
              id="titulo"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="fecha">Fecha</Label>
            <Input
              value={fecha}
              type="date"
              id="fecha"
              onChange={(e) => setFecha(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="descripcion">Descripción</Label>
            <AreaTxt
              value={descripcion}
              type="text"
              id="descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </InputContainer>

          <InputBTN
            type="submit"
            value={nota.id ? "GUARDAR CAMBIOS" : "AGREGAR NOTA"}
          />
        </Form>
      )}

      <Nav>
        <H1>
          notas <span>admin</span>
        </H1>
        <Btn onClick={() => setModal(!modal)}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </Svg>
        </Btn>
      </Nav>
    </Div>
  );
};

export default Formulario;
