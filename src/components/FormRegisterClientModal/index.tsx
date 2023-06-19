import React from "react";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { useRegisterClient } from "../../hooks/useRegisterClient";
import * as S from "./styles";
import { Backdrop, InfoModal } from "../Modal/styles";
import { Modal } from "../Modal";

interface FormRegisterModalProps {
  close(): void;
}

export const FormRegisterModal: React.FC<FormRegisterModalProps> = ({
  close,
}) => {
  const { registerClientForm } = useRegisterClient();
  return (
    <>
      <Backdrop onClick={close} />

      <S.FormContainer onSubmit={registerClientForm.handleSubmit}>
        <h4>Cadastro do Cliente</h4>
        <div className="formClient">
          <TextInput label="Nome" name="nome" form={registerClientForm} />
          <TextInput
            label="Sobrenome"
            name="sobrenome"
            form={registerClientForm}
          />
          <TextInput label="CPF" name="cpf" form={registerClientForm} />
          <TextInput label="Data de Nascimento" name="dataNascCliente" form={registerClientForm} />
          <TextInput
            label="Telefone"
            name="telefone"
            form={registerClientForm}
          />
          <TextInput label="Email" name="email" form={registerClientForm} />
        </div>
          <div className="btnContainer">
            <Button  model="alternative" onClick={close} >
              Cancelar
            </Button>
            <Button  className="btnCad" model="alternative"  type="submit" disabled={!registerClientForm.dirty} >
              Cadastrar
            </Button>
          </div>
      </S.FormContainer>
    </>
  );
};
