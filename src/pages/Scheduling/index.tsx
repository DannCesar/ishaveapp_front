import React, { useState } from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { FormRegisterModal } from "../../components/FormRegisterClientModal";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "react-query";
import { CardClient } from "../../components/CardClient";
import { SuccessModal } from "../../components/Modal/SuccessModal";

export const Scheduling: React.FC = () => {
  const [modalCad, setModalCad] = useState(false);
  const [successModal,setSuccessModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState("");
  // const {data: agendamento } = useQuery("agendamento",
  //   async () => {

  //   }
  //   )
  return (
    <>
      {modalCad && <FormRegisterModal close={() => setModalCad(false)} />}
      {successModal && <SuccessModal title="Realizado agendamento com sucesso!" label="Atente-se a data e horário escolhido para o agendamento."close={() => setSuccessModal(false)}/>}

      <Layout>
        <S.Container>
          <S.Header>
            <div className="searchContainer">
              <SearchInput></SearchInput>
              <span>Pesquisar por :</span>
              <select>
                <option value="cpfCliente">CPF</option>
                <option value="telCliente">Nome</option>
              </select>
              <Button model="alternative">Consultar Cliente</Button>
            </div>
            <div className="btnContainer">
              <Button model="main" onClick={() => setModalCad(true)}>
                Cadastrar Cliente
              </Button>
            </div>
          </S.Header>
          <div className="cardContainer">

              <CardClient/>
          </div>
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
          <div className="btnAgendar">

            <Button type="submit" onClick={() => setSuccessModal(true)}>Agendar</Button>
          </div>
        </S.Container>
      </Layout>
    </>
  );
};
