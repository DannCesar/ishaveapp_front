import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { FormRegisterModal } from "../../components/FormRegisterClientModal";
import { SearchInput } from "../../components/SearchInput";
import {  ListItemClient } from "./ListItemClient";
import { ClientService } from "../../services/ClientService";
import { useQuery } from "react-query";

const clientApi = new ClientService()

export const Client: React.FC = () => {
    const [modalCad, setModalCad] = useState(false);
    // const {data : cliente} = useQuery("cliente",
    // async () => {
    //   return await clientApi?.
    // }
    // )
    return (
      <>
        {modalCad && <FormRegisterModal close={() => setModalCad(false)} />}
  
        <Layout>
          <S.Container>
            <S.Header>
              <div className="searchContainer">
                <SearchInput></SearchInput>
                <span>Pesquisar por :</span>
                <select >
                  <option value="cpfCliente">CPF</option>
                  <option value="telCliente">Telefone</option>
                </select>
                <Button model="alternative">Consultar Cliente</Button>
              </div>
            </S.Header>
            <div className="spanContainer">
              <span>Não há cliente cadastrado.</span>
            </div>
            <S.Content>
              <ListItemClient/>
            </S.Content>
          </S.Container>
        </Layout>
      </>
    );
};
