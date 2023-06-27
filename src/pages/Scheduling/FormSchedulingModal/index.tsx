import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { useRegisterClient } from "../../../hooks/useRegisterClient";
import * as S from "./styles";
import { Backdrop } from "../../../components/Modal/styles";
import { SuccessModal } from "../../../components/Modal/SuccessModal";
import { ErrorModal } from "../../../components/Modal/ErrorModal";
import DatePicker from "react-datepicker";
import { useSchedulingForm } from "../hooks/useSchedulingForm";

interface FormSchedulingModalProps {
  close(): void;
  title: string;
  label: string;
  clientSelected: number;
  servico: {
    idServico: number;
    nomeServico: string;
    precoServico: string;
    descricaoServico: string;
    categoriaServico: string;
    empresaId: number;
    estado: string;
  }[];
}

export const FormSchedulingModal: React.FC<FormSchedulingModalProps> = ({
  close,
  servico,
  clientSelected
}) => {
  const {
    schedulingForm,
    setSuccessModal,
    successModal,
    setErrorModal,
    errorModal,
  } = useSchedulingForm(clientSelected);
  return (
    <>
      <Backdrop onClick={close} />

      <S.FormContainer onSubmit={schedulingForm.handleSubmit}>
        <h4>Agendamento</h4>
        <div className="spanContainer">
          <span>Selecione a data,horário e serviço desejado!</span>
        </div>
        <div className="formClient">
          <div>
            <select
              name=" idServices"
              id=""
              onChange={(e) =>
                schedulingForm.setFieldValue("idServices", [Number(e.target.value)])
              }
            >
              {servico.map((service: any) => (
                <option value={service.idServico}>{service.nomeServico}</option>
              ))}
            </select>
          </div>
          <DatePicker
            className="inputDate"
            selected={schedulingForm.values.data}
            onChange={(date) => schedulingForm.setFieldValue("data",date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione a data e horario"
            name="data"
            
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
            disabled={!schedulingForm.dirty}
          >
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
