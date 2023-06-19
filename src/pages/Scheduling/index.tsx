import React, { useState } from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { FormRegisterModal } from "../../components/FormRegisterClientModal";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Scheduling: React.FC = () => {
  const [modalCad, setModalCad] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <>
      {modalCad && <FormRegisterModal close={() => setModalCad(false)} />}

      <Layout>
        <S.Container>
          <S.Header>
            <div className="searchContainer">
              <SearchInput></SearchInput>
              <span>Pesquisar por :</span>
              <select>
                <option value="cpfCliente">CPF</option>
                <option value="telCliente">Telefone</option>
              </select>
              <Button model="alternative">Consultar</Button>
            </div>
            <div className="btnContainer">
              <Button model="main" onClick={() => setModalCad(true)}>
                Cadastrar Cliente
              </Button>
            </div>
          </S.Header>
          <S.Content>
            <div className="schedulingContainer">
              <div className="spanContainer">
                <span>Selecione a data e horário do seu agendamento:</span>
              </div>
              <DatePicker
                className="datePicker"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                showTimeSelect
                placeholderText="Escolha a data e horário..."
              />
            </div>
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
};
