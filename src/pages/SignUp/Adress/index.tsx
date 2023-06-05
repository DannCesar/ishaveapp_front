import React, { useEffect } from "react";
import * as S from "./styles";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logoIShaveApp.png";
import { useSignUp } from "../hooks/useSignUp";
import { TextInput } from "../../../components/TextInput";
import { AddressService } from "../../../services/AddressService";

const cepApi = new AddressService();

export const Adress: React.FC = () => {
  const navigate = useNavigate();
  const { formSignUp } = useSignUp();
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
        <S.ContentFormContainer>
          <div className="contentContainer">
            <div className="txtContainer">
              <h1>Endereço</h1>
            </div>
          </div>
          <S.FormContainer onSubmit={formSignUp.handleSubmit}>
            <TextInput label="Cep" name="cep" form={formSignUp} />
            <TextInput label="Logradoura" name="logradouro" form={formSignUp} />
            <TextInput label="Bairro" name="bairro" form={formSignUp} />
            <TextInput label="Cidade" name="cidade" form={formSignUp} />
            <TextInput label="Numero" name="numeroEmpresa" form={formSignUp} />
            <TextInput label="UF" name="uf" form={formSignUp} />
          </S.FormContainer>
          <div className="btnContainer">
            <Button onClick={() => navigate("/cadastro")}>Voltar</Button>
            <Button
              model="alternative"
              type="submit"
              onClick={() => formSignUp.handleSubmit}
            >
              Cadastrar
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
