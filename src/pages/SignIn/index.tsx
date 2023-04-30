import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Button } from "../../components/Button";

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container>
        <S.ContentFormContainer>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>IShaveApp</h1>
              <h3>Bem vindo!</h3>
              <span>Insira seu email e senha para efetuar login</span>
            </div>
          </div>
            <Button model="main" >
              Acessar
            </Button>
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
