import React, { useState } from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { FormRegisterModal } from "./FormRegisterClientModal";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "react-query";
import { CardClient } from "../../components/CardClient";
import { SuccessModal } from "../../components/Modal/SuccessModal";
import { ClientService } from "../../services/ClientService";
import { FormSchedulingModal } from "./FormSchedulingModal";


const clientApi = new ClientService();

interface ClientProps {
  cliente: {
    idCliente: number;
    nomeCliente: string;
    telCliente: string;
    cpfCliente: string;
    emailCliente: string;
    dataNascCliente: string;
  };
}

export const Scheduling: React.FC = () => {
  const [modalCad, setModalCad] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [schedulingModal,setSchedulingModal] = useState(false)
 
  const { data  } = useQuery(
    "cliente",
    async () => {
      return await clientApi.consultClient([]);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log(data)
  // const {data: agendamento } = useQuery("agendamento",
  //   async () => {

  //   }
  //   )
  return (
    <>
      {modalCad && <FormRegisterModal close={() => setModalCad(false)} />}
      {successModal && (
        <SuccessModal
          title="Realizado agendamento com sucesso!"
          label="Atente-se a data e horário escolhido para o agendamento."
          close={() => setSuccessModal(false)}
        />
      )}
      {schedulingModal && (
        <FormSchedulingModal
          title="Realizado agendamento com sucesso!"
          label="Atente-se a data e horário escolhido para o agendamento."
          close={() => setSchedulingModal(false)}
        />
      )}

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
            <Button type="submit" onClick={() => setSchedulingModal(true)}>
              Agendar
            </Button>
            </div>
          </S.Header>
          <div className="cardContainer">
            <CardClient />
          </div>
          <S.Content>
           
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
};
