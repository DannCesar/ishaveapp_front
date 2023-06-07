import React from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "./hooks/useSignUp";
import Logo from "../../assets/logoIShaveApp.png";
import { TextInput } from "../../components/TextInput";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { formSignUp } = useSignUp();

  return (
    <>
      <S.Container>
        <S.ContentFormContainer>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>Cadastro</h1>
            </div>
          </div>
          <S.FormContainer onSubmit={formSignUp.handleSubmit}>
            <TextInput
              label="Nome da Empresa"
              name="nomeEmpresa"
              form={formSignUp}
            />
            <TextInput
              label="CNPJ"
              name="cnpjEmpresa"
              form={formSignUp}
            />
            <TextInput
              label="Telefone"
              name="telEmpresa"
              form={formSignUp}
            />
            <TextInput
              label="Email"
              name="emailUsuario"
              form={formSignUp}
            />
            <TextInput
              label="Senha"
              name="senhaUsuario"
              form={formSignUp}
            />
            <TextInput
              label="Confirmar Senha"
              name="senhaUsuario"
              form={formSignUp}
            />
          </S.FormContainer>
          <div className="btnContainer">
            <Button onClick={() => navigate("/")}>Voltar</Button>
            <Button model="alternative" onClick={() => navigate("/endereco")}>
              Próximo
            </Button>
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
