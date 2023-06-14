import React from "react";
import { Layout } from "../../components/Layout";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { useScheduling } from "./hooks/useScheduling";

export const Scheduling: React.FC = () => {
  const { schedulingForm } = useScheduling();
  return (
    <>
      <Layout>
        <S.Container>
          <S.FormContainer onSubmit={schedulingForm.handleSubmit}>
            <h4>Formulário de Cadastro</h4>
            <div className="formClient">
              <TextInput label="CPF" name="cpf" form={schedulingForm} />
              <TextInput label="Nome" name="nome" form={schedulingForm} />
              <TextInput
                label="Sobrenome"
                name="sobrenome"
                form={schedulingForm}
              />
              <TextInput
                label="Telefone"
                name="telefone"
                form={schedulingForm}
              />
              <TextInput label="Email" name="email" form={schedulingForm} />
            </div>
            <div className="btnContainer">
              <Button model="alternative" type="submit">
                Cadastrar
              </Button>
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
