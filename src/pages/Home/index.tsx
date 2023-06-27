import React from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ListItemScheduling } from "./ListItemScheduling";
import { UserService } from "../../services/UserService";
import { useQuery } from "react-query";

const userApi = new UserService();

export const Home: React.FC = () => {
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

  return (
    <>
      <Layout>
        <S.Container>
          <S.Header>
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
            {agendamento?.agendamentos?.map((agendamentos: any) =>
               (
                <ListItemScheduling
                  key={agendamentos.id}
                  agendamentos={agendamentos}
                />
              )
            )}
           {agendamento?.length === 0 && (
              <span >Nenhuma agendamento registrado.</span>
            )}
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
};
