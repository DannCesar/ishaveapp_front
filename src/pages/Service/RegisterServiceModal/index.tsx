import React from "react";
import { TextInput } from "../../../components/TextInput";
import { Button } from "../../../components/Button";
import * as S from "./styles";
import { Backdrop, InfoModal } from "../../../components/Modal/styles";
import { useRegisterService } from "../../../hooks/useRegisterService";
import { SuccessModal } from "../../../components/Modal/SuccessModal";
import { ErrorModal } from "../../../components/Modal/ErrorModal";

interface FormRegisterModalProps {
  close(): void;
}

export const RegisterServiceModal: React.FC<FormRegisterModalProps> = ({
  close,
}) => {
  const {
    registerServiceForm,
    setSuccessModal,
    successModal,
    setErrorModal,
    errorModal,
  } = useRegisterService();
  return (
    <>
      <Backdrop onClick={close} />

      <S.FormContainer onSubmit={registerServiceForm.handleSubmit}>
        <h4>Cadastro de Serviço</h4>
        <div className="formClient">
          <TextInput
            label="Serviço"
            name="nomeServico"
            form={registerServiceForm}
            placeholder="Insira o nome do serviço"
          />
          <TextInput
            label="Preço"
            name="precoServico"
            placeholder="R$ 00,00"
            form={registerServiceForm}
          />
          <TextInput
            placeholder="Adicione a descrição"
            label="Descrição"
            name="descricaoServico"
            form={registerServiceForm}
          />
          <TextInput
            label="Categoria"
            name="categoriaServico"
            form={registerServiceForm}
          />
        </div>
        <div className="btnContainer">
          <Button model="alternative" onClick={close}>
            Cancelar
          </Button>
          <Button
            className="btnCad"
            model="alternative"
            type="submit"
            disabled={!registerServiceForm.dirty}
          >
            Cadastrar
          </Button>
        </div>
        {successModal && (
          <SuccessModal
            title="Serviço cadastrado com Sucesso!"
            label="Serviço pode ser consultado."
            close={() => setSuccessModal(false)}
          />
        )}
        {errorModal && (
          <ErrorModal
            title="Erro ao cadastrar serviço!"
            label="Tente novamente, se persistir consulte o suporte."
            close={() => setErrorModal(false)}
          />
        )}
      </S.FormContainer>
    </>
  );
};
