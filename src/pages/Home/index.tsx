import React, { useState } from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ListItemScheduling } from "./ListItemScheduling";
import { UserService } from "../../services/UserService";
import { useQuery } from "react-query";
import { SearchInput } from "../../components/SearchInput";

const userApi = new UserService();

export const Home: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { data } = useQuery(
    "usuario",
    async () => {
      return await userApi.getHome();
    },
    {
      refetchOnWindowFocus: true,
      staleTime: 60 * 1000, // 1minuto para dar refresh
    }
  );
  const { data: agendamento } = useQuery(
    "agendamentos",
    async () => {
      return await userApi.getHome();
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log(agendamento);

  return (
    <>
      <Layout>
        <S.Container>
          <S.Header>
            <div className="searchContainer">
              <span>Pesquisar por nome do cliente :</span>
              <SearchInput
                value={searchInput}
                onChange={(e: any) => setSearchInput(e.target.value)}
              />
            </div>
            <div className="btnContainer">
              <Button model="main" onClick={() => navigate("/agendamento")}>
                Realizar Agendamento
              </Button>
            </div>
          </S.Header>
          <div className="serviceContainer">
            <span>Cliente</span>
            <span>Data</span>
            <span>Horário</span>
            <span>Serviço</span>
            <span>Preço</span>
          </div>
          <S.Content>
            {agendamento?.agendamentos
              ?.filter((agendamentos: any) =>
                agendamentos.nome
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              )
              .map((agendamentos: any) => (
                <ListItemScheduling
                  key={agendamentos.id}
                  agendamentos={agendamentos}
                />
              ))}
            {agendamento?.agendamentos?.length === 0 && (
              <span>Nenhuma agendamento registrado.</span>
            )}
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
};
