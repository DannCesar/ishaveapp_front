import React, { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { UseSignUp } from "./hooks/useSignUp";

interface SignUpProps extends InputHTMLAttributes<HTMLInputElement>{
}



export const SignUp: React.FC <SignUpProps>= (props) => {
  const navigate = useNavigate()
  const {formSignUp} = UseSignUp()

  return (
    <>
      <S.Container>
        <S.ContentFormContainer>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>Cadastro</h1>
            </div>
          </div>
          <S.FormContainer {...props}>
            <div className="inputContainer">
              <h4>Nome da Empresa</h4>
              <input type="text" name="nomeEmpresa" form={formSignUp}></input>
            </div>
            <div className="inputContainer">
              <h4>CNPJ</h4>
              <input type="number" name="cnpjEmpresa" form={formSignUp}></input>
            </div>
            <div className="inputContainer">
              <h4>Telefone</h4>
              <input type="text"></input>
            </div>
            <div className="inputContainer">
              <h4>Email</h4>
              <input type="email" name="email"></input>
            </div>
            <div className="inputContainer">
              <h4>Senha</h4>
              <input type="password"></input>
            </div>
            <div className="inputContainer">
              <h4>Confirmar Senha</h4>
              <input type="password"></input>
            </div>
          </S.FormContainer>
          <div className="btnContainer">
            <Button onClick={() => navigate('/')}>Voltar</Button>
            <Button model="alternative" onClick={() => navigate('/endereco')}>Próximo</Button>
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
