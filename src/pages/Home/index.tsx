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
  const { data } = useQuery("usuario", async () => {
    return await userApi.getHome();
  });
  //   const { data,isLoading } = useQuery(
  //     "agendamentos",
  //     async () => {
  //       console.log("oi")
  //       return await homeApi.getHome();

  //     },
  //     {
  //       refetchOnWindowFocus: false,
  //     }
  //   );
  //   console.log("agen", data);
  // console.log(isLoading)
  return (
    <>
      {/* {data?.map((usuario: any) => (
      ))} */}
        <Layout >
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
              <ListItemScheduling agendamentos={data} />
            </S.Content>
          </S.Container>
        </Layout>
    </>
  );
};
