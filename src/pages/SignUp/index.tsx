import React from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";

export const SignUp: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.ContentFormContainer>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>Cadastro</h1>
            </div>
          </div>
          <S.FormContainer>
            <div className="inputContainer">
              <h4>Nome da Empresa</h4>
              <input type="email"></input>
            </div>
            <div className="inputContainer">
              <h4>CNPJ</h4>
              <input type="email"></input>
            </div>
            <div className="inputContainer">
              <h4>Telefone</h4>
              <input type="email"></input>
            </div>
            <div className="inputContainer">
              <h4>Email</h4>
              <input type="email"></input>
            </div>
          </S.FormContainer>
          <div className="btnContainer">
            <Button>Voltar</Button>
            <Button model="alternative">Próximo</Button>
          </div>
        </S.ContentFormContainer>
        <S.LogoContainer>
          <div>
            <h1></h1>
          </div>
        </S.LogoContainer>
      </S.Container>
    </>
  );
};
