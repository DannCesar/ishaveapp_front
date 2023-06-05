import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Button } from "../../components/Button";
import Logo from "../../assets/logoIShaveApp.png";
import { useSignIn } from "./hooks/useSignIn";
import { TextInput } from "../../components/TextInput";

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { formSignIn } = useSignIn();
  return (
    <>
      <S.Container>
        <S.ContentFormContainer onSubmit={formSignIn.handleSubmit}>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>IShaveApp</h1>
              <h3>Bem vindo!</h3>
              <span>Insira seu email e senha para efetuar login</span>
            </div>
            <TextInput
              type="text"
              name="emailUsuario"
              label="Email"
              form={formSignIn}
            />
            <TextInput
              type="password"
              name="senhaUsuario"
              label="Senha"
              form={formSignIn}
            />
            <div className="spanContainer">
              <span>
                Ainda não é cadastrado? Clique{" "}
                <button onClick={() => navigate("/cadastro")}>aqui</button>
              </span>
            </div>
            <Button model="main" onClick={()=> formSignIn.handleSubmit}>Acessar</Button>
          </div>
        </S.ContentFormContainer>
        <S.LogoContainer>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </S.LogoContainer>
      </S.Container>
    </>
  );
};
