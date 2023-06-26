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
  const [filter,setFilter] =useState("")
  const { data } = useQuery("servico", async () => {
    return await serviceApi.getService();
  });
  // console.log(data);

  // const filterService = data.filter((servico:any) =>{

  // )}
  return (
    <>
      {modalCad && <RegisterServiceModal close={() => setModalCad(false)} />}

      <Layout>
        <S.Container>
          <S.Header>
            <div className="searchContainer">
              <SearchInput></SearchInput>
              <span>Pesquisar por nome de Serviço</span>

              <Button model="alternative">Consultar</Button>
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
            {data?.map((servico: any) =>
              servico == "" ? (
                "Não há serviço cadastrado."
              ) : (
                <ListItemService key={servico.id} servico={servico} />
              )
            )}
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
};
