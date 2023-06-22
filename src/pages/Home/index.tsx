import React from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ListItemScheduling } from "../Scheduling/ListItemScheduling";
import { UserService } from "../../services/UserService";
import { useQuery } from "react-query";

const homeApi = new UserService();

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { data: agendamentos } = useQuery(
    "agendamentos",
    async () => {
      await homeApi.getHome();
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log("agen", agendamentos);

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
          <div className="spanContainer">
            <span>Não há agendamentos para o dia.</span>
          </div>
          <S.Content>
            <ListItemScheduling agendamentos={agendamentos} />
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
};
