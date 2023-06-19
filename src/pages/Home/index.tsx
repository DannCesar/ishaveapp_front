import React from "react";
import * as S from "./styles";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";
import { ListItemScheduling } from "../../components/ListItemScheduling";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
    const navigate = useNavigate()
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
