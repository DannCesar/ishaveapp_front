import React from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";

import { useNavigate } from "react-router-dom";
import { ListItemScheduling } from "../Scheduling/ListItemScheduling";
import { UserService } from "../../services/UserService";

const homeApi = new UserService()

export const Home: React.FC = () => {
    const navigate = useNavigate()
    // const {data: } = useQuery("home",
    // async () => {
    //   await 
    // })
  return (
    <>
      <Layout>
        <S.Container>
          <S.Header>
            <div className="btnContainer">
              <Button model="main" onClick={() =>navigate("/agendamento")}>
                Cadastrar Agendamento
              </Button>
            </div>
          </S.Header>
          <div className="spanContainer">
            <span>Não há agendamentos para o dia.</span>
          </div>
          <S.Content>
            <ListItemScheduling />
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
};
