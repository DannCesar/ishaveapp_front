import React from "react";
import { Layout } from "../../../components/Layout";
import * as S from "./styles";
import { Button } from "../../../components/Button";
import { TextInput } from "../../../components/TextInput";
import { useRegisterClient} from "./hooks/useRegisterClient";

export const RegisterClient: React.FC = () => {
  const { registerClientForm } = useRegisterClient();
  return (
    <>
      <Layout>
        <S.Container>
          <S.FormContainer onSubmit={registerClientForm.handleSubmit}>
            <h4>Formulário de Cadastro</h4>
            <div className="formClient">
              <TextInput label="CPF" name="cpf" form={registerClientForm} />
              <TextInput label="Nome" name="nome" form={registerClientForm} />
              <TextInput
                label="Sobrenome"
                name="sobrenome"
                form={registerClientForm}
              />
              <TextInput
                label="Telefone"
                name="telefone"
                form={registerClientForm}
              />
              <TextInput label="Email" name="email" form={registerClientForm} />
            <div className="btnContainer">
              <Button model="alternative" type="submit">
                Cadastrar
              </Button>
            </div>
            </div>
          </S.FormContainer>
          <div className="nextContainer">
            <Button>Próximo</Button>
          </div>
        </S.Container>
      </Layout>
    </>
  );
};
