import React from 'react'
import * as S from './styles'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { UseSignUp } from '../hooks/useSignUp'
import Logo from "../../../assets/logoIShaveApp.png"

export const Adress: React.FC = () => {
    const navigate = useNavigate()
    const {formSignUp} =UseSignUp()
    return(
        <>
         <S.Container>
        <S.ContentFormContainer>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>Endereço</h1>
            </div>
          </div>
          <S.FormContainer onSubmit={formSignUp.handleSubmit}>
            <div className="inputContainer">
              <h4>CEP</h4>
              <input type="text" name='cep'></input>
            </div>
            <div className="inputContainer">
              <h4>Logradouro</h4>
              <input type="number" name='logradouro'></input>
            </div>
            <div className="inputContainer">
              <h4>Bairro</h4>
              <input type="text" name='bairro'></input>
            </div>
            <div className="inputContainer">
              <h4>Cidade</h4>
              <input type="email" name='cidade'></input>
            </div>
            <div className="inputContainer">
              <h4>Número</h4>
              <input type="text" name='numeroEmpresa'></input>
            </div>
            <div className="inputContainer">
              <h4>UF</h4>
              <input type="text" name='uf'></input>
            </div>
          </S.FormContainer>
          <div className="btnContainer">
            <Button onClick={() => navigate('/cadastro')}>Voltar</Button>
            <Button model="alternative" type='submit' onClick={() => formSignUp.handleSubmit}>Cadastrar</Button>
          </div>
        </S.ContentFormContainer>
        <S.LogoContainer>
        <div className="logo">
           <img src={Logo} alt="" />
          </div>
        </S.LogoContainer>
      </S.Container>
        </>
    )
}