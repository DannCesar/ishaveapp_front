import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { useRegisterClient } from "../../../hooks/useRegisterClient";
import * as S from "./styles";
import { Backdrop } from "../../../components/Modal/styles";
import { SuccessModal } from "../../../components/Modal/SuccessModal";
import { ErrorModal } from "../../../components/Modal/ErrorModal";
import DatePicker from "react-datepicker";

interface FormSchedulingModalProps {
  close(): void;
}

export const FormSchedulingModal: React.FC<FormSchedulingModalProps> = ({
  close,
}) => {
  const {
    registerClientForm,
    setSuccessModal,
    successModal,
    setErrorModal,
    errorModal,
  } = useRegisterClient();
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <>
      <Backdrop onClick={close} />

      <S.FormContainer onSubmit={registerClientForm.handleSubmit}>
        <h4>Agendamento</h4>
          <div className="spanContainer">
            <span>Selecione a data,horário e serviço desejado!</span>
          </div>
        <div className="formClient">
          <div>
            <select name=" idServices" id="" form={registerClientForm}>
              <option value="" >Corte</option>
            </select>
          </div>
          <DatePicker
            className="inputDate"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione a data e horario"
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
            disabled={!registerClientForm.dirty}
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
