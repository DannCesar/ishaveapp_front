import React from "react";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import * as S from "./styles";
import { Backdrop, InfoModal } from "../Modal/styles";
import { useRegisterService } from "../../hooks/useRegisterService";

interface FormRegisterModalProps {
  close(): void;
}

export const RegisterServiceModal: React.FC<FormRegisterModalProps> = ({
  close,
}) => {
  const { registerServiceForm } = useRegisterService();
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
          />
          <TextInput label="Preço" name="precoServico" form={registerServiceForm} />
          <TextInput label="Descrição" name="descricaoServico" form={registerServiceForm} />
          <TextInput label="Categoria" name="categoriaServico" form={registerServiceForm} />
        </div>
          <div className="btnContainer">
            <Button  model="alternative" onClick={close} >
              Cancelar
            </Button>
            <Button  className="btnCad" model="alternative"  type="submit" disabled={!registerServiceForm.dirty} >
              Cadastrar
            </Button>
          </div>
      </S.FormContainer>
    </>
  );
};
