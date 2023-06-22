import React from "react";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import { useRegisterClient } from "../../../hooks/useRegisterClient";
import * as S from "./styles";
import { Backdrop, InfoModal } from "../../../components/Modal/styles";
import { Modal } from "../../../components/Modal";
import { SuccessModal } from "../../../components/Modal/SuccessModal";
import { ErrorModal } from "../../../components/Modal/ErrorModal";

interface FormRegisterModalProps {
  close(): void;
}

export const FormRegisterModal: React.FC<FormRegisterModalProps> = ({
  close,
}) => {
  const { registerClientForm,
    setSuccessModal,
    successModal,
    setErrorModal,
    errorModal,
   } = useRegisterClient();
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
          <TextInput label="Data de Nascimento" name="dataNasc" form={registerClientForm} />
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
          {successModal && (
          <SuccessModal
            title="Os dados do cliente foram salvos!"
            label="Realize o agendamento para concluir o cadastro."
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
    </>
  );
};
