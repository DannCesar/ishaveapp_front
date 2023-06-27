import React, { useState } from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { FormRegisterModal } from "../Scheduling/FormRegisterClientModal";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";
import { RegisterServiceModal } from "./RegisterServiceModal";
import { ListItemService } from "./ListItemService";
import { useQuery } from "react-query";
import { RegisterService } from "../../services/RegisterService";

const serviceApi = new RegisterService();

export const Service: React.FC = () => {
  const [modalCad, setModalCad] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const { data } = useQuery("servico", async () => {
    return await serviceApi.getService();
  });

  return (
    <>
      {modalCad && <RegisterServiceModal close={() => setModalCad(false)} />}

      <Layout>
        <S.Container>
          <S.Header>
            <div className="searchContainer">
              
                <span>Pesquisar por nome do serviço :</span>
                <SearchInput
                  value={searchInput}
                  onChange={(e: any) => setSearchInput(e.target.value)}
                />
             
            </div>
            <div className="btnContainer">
              <Button model="main" onClick={() => setModalCad(true)}>
                Cadastrar Serviço
              </Button>
            </div>
          </S.Header>

          <div className="serviceContainer">
            <span>Serviço</span>
            <span>Preço</span>
            <span>Categoria</span>
            <span>Descrição</span>
          </div>
          <S.Content>
            {data
              ?.filter((servico: any) =>
                servico.nomeServico
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
              .map((servico: any) =>
                (
                  <ListItemService key={servico.id} servico={servico} />
                )
              )}
               {data?.length === 0 &&  (
              <span className="notFoundContainer">Nenhum serviço registrado.</span>
            )}
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
};
