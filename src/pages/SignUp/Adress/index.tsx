import React from 'react'
import * as S from './styles'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

export const Adress: React.FC = () => {
    const navigate = useNavigate()
    return(
        <>
         <S.Container>
        <S.ContentFormContainer>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>Endereço</h1>
            </div>
          </div>
          <S.FormContainer>
            <div className="inputContainer">
              <h4>CEP</h4>
              <input type="text"></input>
            </div>
            <div className="inputContainer">
              <h4>Logradouro</h4>
              <input type="number"></input>
            </div>
            <div className="inputContainer">
              <h4>Bairro</h4>
              <input type="text"></input>
            </div>
            <div className="inputContainer">
              <h4>Cidade</h4>
              <input type="email"></input>
            </div>
            <div className="inputContainer">
              <h4>Número</h4>
              <input type="password"></input>
            </div>
            <div className="inputContainer">
              <h4>UF</h4>
              <input type="password"></input>
            </div>
          </S.FormContainer>
          <div className="btnContainer">
            <Button onClick={() => navigate('/cadastro')}>Voltar</Button>
            <Button model="alternative">Cadastrar</Button>
          </div>
        </S.ContentFormContainer>
        <S.LogoContainer>
          <div>
            <h1></h1>
          </div>
        </S.LogoContainer>
      </S.Container>
        </>
    )
}