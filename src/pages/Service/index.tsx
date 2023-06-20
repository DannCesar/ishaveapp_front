import React, { useState } from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { FormRegisterModal } from "../../components/FormRegisterClientModal";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import { RegisterServiceModal } from "../../components/RegisterServiceModal";
import { ListItemService } from "./ListItemService";
import { useQuery } from "react-query";
import { RegisterService } from "../../services/RegisterService";

const serviceApi = new RegisterService();

export const Service: React.FC = () => {
  const [modalCad, setModalCad] = useState(false);
  // const { data: servico } = useQuery("servico", async () => {
  //   return await serviceApi.getService();
  // });
  return (
    <>
      {modalCad && <RegisterServiceModal close={() => setModalCad(false)} />}

      <Layout>
        <S.Container>
          <S.Header>
            <div className="searchContainer">
              <SearchInput></SearchInput>
              <span>Pesquisar por :</span>
              <select>
                <option value="nomeServico">Serviço</option>
                <option value="categoriaServico">Categoria</option>
              </select>
              <Button model="alternative">Consultar</Button>
            </div>
            <div className="btnContainer">
              <Button model="main" onClick={() => setModalCad(true)}>
                Cadastrar Serviço
              </Button>
            </div>
          </S.Header>
          <div className="spanContainer">
            <span>Não há serviço cadastrado.</span>
          </div>
          <S.Content></S.Content>
          <ListItemService />
        </S.Container>
      </Layout>
    </>
  );
};
