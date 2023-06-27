import React, { useState } from "react";
import { Layout } from "../../components/Layout";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { FormRegisterModal } from "../Scheduling/FormRegisterClientModal";
import { SearchInput } from "../../components/SearchInput";
import { ClientService } from "../../services/ClientService";
import { useQuery } from "react-query";
import { UserService } from "../../services/UserService";

const userApi = new UserService()



export const Client: React.FC = () => {
  const [modalCad, setModalCad] = useState(false);
  const {data} = useQuery("usuario", async() =>{
    return  await userApi.getHome()
  })

  return (
    <>
      {modalCad && <FormRegisterModal close={() => setModalCad(false)} />}
      {
        data?.map((usuario:any) => (
          <Layout  key={usuario.id} usuario={usuario}>

          <S.Container>
            <S.Header>
              <div className="searchContainer">
                <SearchInput></SearchInput>
                <span>Pesquisar por :</span>
                <select>
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
              {/* <ListItemClient cliente={data} /> */}
              </S.Content>
          </S.Container>
       
          </Layout>
        )
      )}
    </>
  );
};
