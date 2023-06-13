import React, { useEffect } from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "./hooks/useSignUp";
import { TextInput } from "../../components/TextInput";
import { AddressService } from "../../services/AddressService";

const cepApi = new AddressService();

export const SignUp: React.FC = () => {
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
            />
            <TextInput label="CNPJ" name="cnpjEmpresa" form={formSignUp} />
            <TextInput label="Telefone" name="telEmpresa" form={formSignUp} />
            <TextInput label="Email" name="emailUsuario" form={formSignUp} />
            <TextInput label="CEP" name="cep" form={formSignUp} />
            <TextInput label="Logradouro" name="logradouro" form={formSignUp} />
            <TextInput label="Bairro" name="bairro" form={formSignUp} />
            <TextInput label="Cidade" name="cidade" form={formSignUp} />
            <TextInput label="Numero" name="numeroEmpresa" form={formSignUp} />
            <TextInput label="UF" name="uf" form={formSignUp} />
            <TextInput label="Senha" name="senhaUsuario" form={formSignUp} />
            <TextInput
              label="Confirmar Senha"
              name="senhaUsuario"
              form={formSignUp}
            />
            </div>
            <div className="btnContainer">
            <Button onClick={() => navigate("/login")}>Voltar</Button>
              <Button model="main" type="submit">
                Cadastrar
              </Button>
            </div>
          </S.FormContainer>
        </S.InfoFormContainer>
      </S.Container>
    </>
  );
};
