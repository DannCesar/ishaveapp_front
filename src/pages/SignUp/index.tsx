import React, {  InputHTMLAttributes } from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import {  useSignUp } from "./hooks/useSignUp";
import Logo from "../../assets/logoIShaveApp.png"

interface SignUpProps extends InputHTMLAttributes<HTMLInputElement>{
}



export const SignUp: React.FC <SignUpProps>= (props) => {
  const navigate = useNavigate()
  const {formSignUp} = useSignUp()

  return (
    <>
      <S.Container>
        <S.ContentFormContainer>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>Cadastro</h1>
            </div>
          </div>
          <S.FormContainer  onSubmit={formSignUp.handleSubmit}>
            <div className="inputContainer">
              <h4>Nome da Empresa</h4>
              <input type="text" name="nomeEmpresa" ></input>
            </div>
            <div className="inputContainer">
              <h4>CNPJ</h4>
              <input type="number" name="cnpjEmpresa"></input>
            </div>
            <div className="inputContainer" >
              <h4>Telefone</h4>
              <input type="text" name="telEmpresa"></input>
            </div>
            <div className="inputContainer">
              <h4>Email</h4>
              <input type="email" name="emailUsuario" ></input>
            </div>
            <div className="inputContainer">
              <h4>Senha</h4>
              <input type="password" name="senhaUsuario"></input>
            </div>
            <div className="inputContainer">
              <h4>Confirmar Senha</h4>
              <input type="password" name="senhaUsuario"></input>
            </div>
          </S.FormContainer>
          <div className="btnContainer">
            <Button onClick={() => navigate('/')}>Voltar</Button>
            <Button model="alternative" onClick={() => navigate('/endereco')}>Próximo</Button>
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
