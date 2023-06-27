import React, { useEffect } from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "./hooks/useSignUp";
import { TextInput } from "../../components/TextInput";
import { AddressService } from "../../services/AddressService";
import { SuccessModal } from "../../components/Modal/SuccessModal";
import { ErrorModal } from "../../components/Modal/ErrorModal";

const cepApi = new AddressService();

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const {
    formSignUp,
    setSuccessModal,
    successModal,
    setErrorModal,
    errorModal,
  } = useSignUp();

  useEffect(() => {
    const getCep = async () => {
      const searchCep = formSignUp?.values?.cep?.replace("-", "");
      if (searchCep.length === 8) {
        const address = await cepApi.getCep(searchCep);
        formSignUp.setFieldValue("logradouro", address.logradouro);
        formSignUp.setFieldValue("cidade", address.localidade);
        formSignUp.setFieldValue("bairro", address.bairro);
        formSignUp.setFieldValue("uf", address.uf);
      }
    };
    getCep();
  }, [formSignUp.values.cep]);

  return (
    <>
      <S.Container>
        <S.InfoFormContainer>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>Dados da Empresa</h1>
            </div>
          </div>
          <S.FormContainer onSubmit={formSignUp.handleSubmit}>
            <div className="infoContainer">
              <TextInput
                label="Nome da Empresa"
                name="nomeEmpresa"
                form={formSignUp}
                required
              />
              <TextInput
                label="CNPJ"
                name="cnpjEmpresa"
                form={formSignUp}
                required
              />
              <TextInput label="Telefone" name="telEmpresa" form={formSignUp} required />
              <TextInput label="Email" name="emailUsuario" form={formSignUp} required/>
              <TextInput label="CEP" name="cep" form={formSignUp} required/>
              <TextInput
                label="Logradouro"
                name="logradouro"
                form={formSignUp}
                required/>
              <TextInput label="Bairro" name="bairro" form={formSignUp} required />
              <TextInput label="Cidade" name="cidade" form={formSignUp} required />
              <TextInput
                label="Numero"
                name="numeroEmpresa"
                form={formSignUp}
                required />
              <TextInput label="UF" name="uf" form={formSignUp} required />
              <TextInput
                type="password"
                label="Senha"
                name="senhaUsuario"
                form={formSignUp}
                required />
              <TextInput
                type="password"
                label="Confirmar Senha"
                name="senhaUsuario"
                form={formSignUp}
              />
            </div>
            <div className="btnContainer">
              <Button onClick={() => navigate("/")}>Voltar</Button>
              <Button model="main" type="submit" >
                Cadastrar
              </Button>
            </div>
            {successModal && (
          <SuccessModal
            title="Encaminhado email de confirmação!"
            label="Confirme seu cadastro através do email."
            close={() => setSuccessModal(false)}
          />
        )}
        {errorModal && (
          <ErrorModal
            title="Erro na tentativa de cadastro!"
            label="Tente novamente, se persistir consulte o suporte."
            close={() => setErrorModal(false)}
          />
        )}
          </S.FormContainer>
        </S.InfoFormContainer>
      </S.Container>
    </>
  );
};
