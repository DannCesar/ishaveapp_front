import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Button } from "../../components/Button";
import Logo from "../../assets/logo.jpeg"

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
            <div className="inputContainer">
              <h4>Email</h4>
              <input type="email"></input>
            </div>
            <div className="inputContainer">
              <h4>Senha</h4>
              <input type="password"></input>
              <div className="spanContainer">

              <span>Ainda não é cadastrado? Clique <button onClick={() => navigate('/cadastro')}>aqui</button></span>
              </div>
            </div>
            <Button model="main">Acessar</Button>
          </div>
        </S.ContentFormContainer>
        <S.LogoContainer>
          {/* <div className="logo">
           <img src={Logo} alt="" />
          </div> */}
        </S.LogoContainer>
      </S.Container>
    </>
  );
};
