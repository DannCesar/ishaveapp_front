import React from 'react'
import * as S from './styles'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import Logo from "../../../assets/logoIShaveApp.png"
import { useSignUp } from '../hooks/useSignUp'
import { TextInput } from '../../../components/TextInput'


export const Adress: React.FC = () => {
    const navigate = useNavigate()
    const {formSignUp} =useSignUp()
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
          <TextInput
              label="Cep"
              name="cep"
              form={formSignUp}
            />
            <TextInput
              label="Logradoura"
              name="logradouro"
              form={formSignUp}
            />
            <TextInput
              label="Bairro"
              name="bairro"
              form={formSignUp}
            />
            <TextInput
              label="Cidade"
              name="cidade"
              form={formSignUp}
            />
            <TextInput
              label="Numero"
              name="numeroEmpresa"
              form={formSignUp}
            />
            <TextInput
              label="UF"
              name="uf"
              form={formSignUp}
            />
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